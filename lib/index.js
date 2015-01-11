var path = require('path'),
    util = require('util'),

    wow = require('./wow'),

    _ = require('lodash'),
    async = require('async'),
    fs = require('fs-extra'),
    battle = require('battle');


var crimson = module.exports = {};
var client;
var config = {
    bnet: {
        apiKey: null,
        region: 'eu',
        character: "strawbrrykek",
        realm: "hellfire"
    }
};

function defined(val){
    return typeof val !== 'undefined';
}

crimson.getConfig = function(){
    return config = fs.readJSONFileSync(path.join(__dirname, '../config.json'));
};

crimson.setConfig = function($val){
    fs.writeJSONFileSync(path.join(__dirname, '../config.json'), $val);
};

crimson.getBattleClient = function(){
    if(defined(client)) return client;
    return client = battle.createClient(crimson.getConfig().bnet);
};

crimson.updateRaids = function(file, cb){
    var apiData = fs.readJSONFileSync(file);

    crimson.getBattleClient();
    client.character({
        realm: config.bnet.realm,
        name: config.bnet.character,
        fields: 'progression'
    }, function(err, data){
        newData = wow.processRaidData(data.progression.raids);
        console.log(util.inspect(newData, { hidden: true, colors: true }));
        fs.writeJSONFileSync(file, _.merge(apiData, newData));
        cb();
    })
};
