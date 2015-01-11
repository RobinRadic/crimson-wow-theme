var path = require('path'),
    util = require('util'),
    util = require('http'),

    _ = require('lodash'),
    async = require('async'),
    fs = require('fs-extra'),
    slug = require('slug'),
    crimson = require('./index');

var wow = module.exports = {};

wow.slugify = function(val){
    return slug(val).toLowerCase();
}

wow.processRaidData = function(raids){
    var data = {
        raids: [],
        bosses: []
    };


    _.each(raids, function(raid){
        console.log(raid);
        var raidSlug = wow.slugify(raid.name);
        data.raids.push({
            name: raid.name,
            slug: raidSlug,
            id: raid.id,
            bosses: _.pluck(raid.bosses, 'id'),
            images: {
                map: 'http://media.blizzard.com/wow/media/artwork/dungeon-maps/en-us/' + raidSlug + '/' + raidSlug + '.jpg',
                thumbnail: 'http://eu.battle.net/wow/static/images/wiki/zone/thumbnails/' + raidSlug + '.jpg'
            }
        });
        _.each(raid.bosses, function(boss){
            data.bosses.push({
                name: boss.name,
                slug: wow.slugify(boss.name),
                id: boss.id,
                raid_id: raid.id,
                images: {
                    icon: 'http://media.blizzard.com/wow/renders/npcs/portrait/creature' + boss.id + '.jpg'
                }
            })
        });
    });

    return data;
}
