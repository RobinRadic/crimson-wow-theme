#!/usr/bin/env node

var radic = require('radic-cli'),
    cli = new radic.Cli('crimson'),
    path = require('path'),
    crimson = require('../lib');

cli.command('update-raid-zones')
    .description('Updates raid zones in app/data/api.json')
    .method(function (cmd) {
        //console.log(cmd);
        cli.autoexit = false;
        crimson.updateRaids(path.join(__dirname, '../app/data/api.json'), function(){
            cli.exit();
        });
    });

cli.parse(process.argv);


