/**
 * Created by GiBeomHong on 2016. 8. 7..
 */

var request = require('request');

exports.mainpage = function(req,res,callback){
    res.render('../views/main.html');
}

exports.temp_parser = function(req,res,callback){
    res.render('../views/temp_parser.html');
}

exports.year4 = function(req,res,callback){
    res.render('../views/4year.html');
}

exports.past = function(req,res,callback){
    res.render('../views/past_contents.html');
}

exports.staff = function(req,res,callback){
    res.render('../views/staff_real.html');
}

exports.enroll = function(req,res,callback){
    res.render('../views/enroll_vod.html');
}

exports.popup = function(req,res,callback){
    res.render('../views/popup_temp.html');
}

exports.reply = function(req,res,callback){
    res.render('../views/reply.html');
}

exports.donor = function(req,res,callback){
    res.render('../views/donor.html');
}

exports.location = function(req,res,callback){
    res.render('../views/location.html');
}

exports.etc_contact = function (req,res,callback){
    res.render('../views/etc_contact.html');
}

// youtube_api 사용 //
var google = require('googleapis');
var youtube = google.youtube({version: 'v3', auth: "AIzaSyDYDWpSuUV7LGBjiQWMcTFhKitMX9TG_6c"});
var queryOptions = {
    'part': 'statistics',
    'maxResults': 5,
    'id': 'UCelPbnoAuzgRDFJAsJ4Du7A'
};
var fb_graph = require('fbgraph');
fb_graph.setAccessToken('1606945842934576|ac7afc97c9d7f46b91751e03271a0585');
var fb_sub_cnt = 0;
var fb_post_cnt = 0;
fb_graph.get("yonkotv?fields=fan_count,posts", function(err, res, callback) {
    fb_sub_cnt = res.fan_count;
    fb_post_cnt = res.posts.data.length;
});


exports.channel = function(req,res,callback){


    /* youtube api 사용 */
    youtube.channels.list(queryOptions, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        var sub_cnt = data.items[0].statistics.subscriberCount;
        var view_cnt = data.items[0].statistics.viewCount;
        var video_cnt = data.items[0].statistics.videoCount;

        /*facebook api 사용 */
        //fb_graph.get("yonkotv?fields=fan_count", function(err, res, callback) {
        //    count = res.fan_count;
        //    res.render('../views/channel.html',{sub_cnt: sub_cnt, view_cnt : view_cnt, video_cnt : video_cnt, fb_sub_cnt : count});
        //});


        res.render('../views/channel.html',{sub_cnt: sub_cnt, view_cnt : view_cnt, video_cnt : video_cnt, fb_sub_cnt : fb_sub_cnt, fb_post_cnt : fb_post_cnt});
    });

}