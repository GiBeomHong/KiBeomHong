/**
 * Created by Jihyun on 2016. 10. 27..
 */
//Get Facebook Likes Count of a page

var request = require('request');
var FB = require('fb');
var graph = require('fbgraph');
graph.setAccessToken('1606945842934576|ac7afc97c9d7f46b91751e03271a0585');
FB.setAccessToken('1606945842934576|ac7afc97c9d7f46b91751e03271a0585');



exports.test_fb = function (req,res,callback){
    var count_url = "https://graph.facebook.com/230818497292340?access_token=1606945842934576|ac7afc97c9d7f46b91751e03271a0585&fields=fan_count"
    request({url: count_url, json: true}, function(err, res, json) {
        if (err) {
            throw err;
        }
        var count = json.fan_count;
        console.log("count is " + count);
    });


    graph.get("yonkotv?fields=fan_count", function(err, res) {
        console.log(res.fan_count); // { id: '4', name: 'Mark Zuckerberg'... }
    });


}
