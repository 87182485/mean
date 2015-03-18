/**
 * Created by Gary on 3/18/2015.
 */
var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');
console.log(rootPath);

module.exports = {
    development:{
        rootPath:rootPath,
        db: 'mongodb://localhost/meanpluralsight',
        port: process.env.PORT || 3030
    },

    production:{
        rootPath:rootPath,
        db: 'mongodb://gary114:jordan23@ds062097.mongolab.com:62097/mongo-mean',
        port: process.env.PORT || 80
    }
};