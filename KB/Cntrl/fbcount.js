/**
 * Created by Jihyun on 2016. 10. 27..
 */
//Get Facebook Likes Count of a page

var request = require('request');





exports.test_fb = function (req,res,callback){

    request({url: ' https://graph.facebook.com/230818497292340?access_token=1606945842934576|ac7afc97c9d7f46b91751e03271a0585&fields=fan_count', json: true}, function(err, res, json) {
        if (err) {
            throw err;
            //console.log(err.toString());
        }
        var count = json.fan_count;
        console.log("count is " + count);

    });
}
