/**
 * Created by Gary on 3/18/2015.
 */

var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback(){
        console.log('mean db open.');
    });

    var userSchema = mongoose.Schema({
        firstName:String,
        lastName:String,
        username:String,
        salt:String,
        hashed_password:String,
        roles:[String]
    });

    userSchema.methods ={
        authenticate:function(passwordToMatch){
            return hashedPassword(this.salt, passwordToMatch) === this.hashed_password;
        }
    };

    var User = mongoose.model('User', userSchema);
    User.find({}).exec(function(err, collection){
        if(collection.length===0){
            var salt, hash;
            salt = createSalt();
            hash = hashedPassword(salt, 'gary');
            User.create({firstName:'Gary', lastName:'Yang', username:'gary114', salt:salt, hashed_password:hash, roles:['admin']});
            salt = createSalt();
            hash = hashedPassword(salt, 'cici');
            User.create({firstName:'Cici', lastName:'Chen', username:'cicichen0627', salt:salt, hashed_password:hash, roles:[]});
        }
    });
};

function createSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function hashedPassword(salt, password){
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(password).digest('hex');
}