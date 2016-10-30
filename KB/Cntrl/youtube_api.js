/**
 * Created by GiBeomHong on 2016. 10. 28..
 */


/*
var Youtube = require("youtube-api");
Youtube.authenticate({
    type: "ouath",
    token: "AIzaSyDYDWpSuUV7LGBjiQWMcTFhKitMX9TG_6c"
});
*/

var google = require('googleapis');
var youtube = google.youtube({version: 'v3', auth: "AIzaSyDYDWpSuUV7LGBjiQWMcTFhKitMX9TG_6c"});
var queryOptions = {
    'part': 'statistics',
    'maxResults': 5,
    'id': 'UCelPbnoAuzgRDFJAsJ4Du7A'
};


exports.youtube_api = function (req,res,callback) {

    /*
     Youtube.channels.list({
     "part": "statistics",
     "mySubscribers": true,
     "maxResults": 50
     }, function (err, data) {
     console.log(err, data);
     });
     */

    youtube.channels.list(queryOptions, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        var sub_cnt = data.items[0].statistics.subscriberCount;
        var view_cnt = data.items[0].statistics.viewCount;
        var video_cnt = data.items[0].statistics.videoCount;

        //console.log("연고 티비의 총 구독자 수 : " + sub_cnt + " 명");
        //console.log("연고 티비의 총 view 수 : " + view_cnt + " 회");
        //console.log("연고 티비의 총 동영상 수 : " + video_cnt + " 개");


    });

};
