var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).setPath('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(stylus.middleware(
    {
        src:__dirname+'/public',
        complie: compile
    }
));

app.use(express.static(__dirname+'/public'));


if(env === 'development'){
    mongoose.connect('mongodb://localhost/meanpluralsight');
}else{
    mongoose.connect('mongodb://gary114:jordan23@ds062097.mongolab.com:62097/mongo-mean');
    console.log('Connected to MongoLab');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
    console.log('mean db open.');
});

app.get('/partials/*', function(req, res){
    res.render('partials/' + req.params[0]);
});

//var messageSchema = mongoose.Schema({message:String});
//var Message = mongoose.model('Message', messageSchema);
//var mongoMessage;
//Message.findOne().exec(function(err, messageDoc){
//    mongoMessage = messageDoc.message;
//});

app.get('*', function(req, res){
    //res.render('index', {
    //    mongoMessage:mongoMessage
    //});
    res.render('index');
});

var port = process.env.PORT || 3030;

app.listen(port);
console.log("Listen to port " + port + " ... ");