var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

module.exports = function(url){
    console.log(url);
    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            var name;
            var json = {
                name : ""
            };

            var name_selector = "#ember7192 > div.pv-top-card-section__body > div.pv-top-card-section__information.mt3 > h1";

            $(name_selector).each(function(){
                var data = $(name_selector);
                var profil_name = data.text();
                json.name = profil_name;
            });
        }

        fs.writeFile('./output.json', JSON.stringify(json, null, 4), function(err, res){
          console.log('File output.json successfully written! ' + json.name);
        });
    });
}
