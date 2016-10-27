/**
 * Created by GiBeomHong on 2016. 8. 29..
 */

    /*

var VOR_Model = require("../Model/four_years_model").VODModel;

exports.new_VR = function(req,res,callback){
    var now = Date.now();

    var VOD = new VOR_Model.newVOD();

    //hash tag 파싱
    var temp_tag = (req.body.tag).substring(1);
    var tag = temp_tag.split("#");


    //cover image 경로
    var temp_cover = req.body.cover;
    var cover = "images/"+temp_cover;


    VOD.title = req.body.title;
    VOD.date = now;
    VOD.tag = tag;
    VOD.cover = cover;
    VOD.youtube = req.body.link;
    VOD.explan = req.body.explan;
    VOD.save(function(err){
        callback(err);
    })

    res.redirect('/enroll')
}

        */