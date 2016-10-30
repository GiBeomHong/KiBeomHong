/**
 * Created by GiBeomHong on 2016. 8. 7..
 */

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


// youtube_api 사용 //
var google = require('googleapis');
var youtube = google.youtube({version: 'v3', auth: "AIzaSyDYDWpSuUV7LGBjiQWMcTFhKitMX9TG_6c"});
var queryOptions = {
    'part': 'statistics',
    'maxResults': 5,
    'id': 'UCelPbnoAuzgRDFJAsJ4Du7A'
};

exports.channel = function(req,res,callback){

    youtube.channels.list(queryOptions, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        var sub_cnt = data.items[0].statistics.subscriberCount;
        var view_cnt = data.items[0].statistics.viewCount;
        var video_cnt = data.items[0].statistics.videoCount;

        console.log("연고 티비의 총 구독자 수 : " + sub_cnt + " 명");
        console.log("연고 티비의 총 view 수 : " + view_cnt + " 회");
        console.log("연고 티비의 총 동영상 수 : " + video_cnt + " 개");

        res.render('../views/channel.html',{sub_cnt: sub_cnt, view_cnt : view_cnt, video_cnt : video_cnt});
    });

}