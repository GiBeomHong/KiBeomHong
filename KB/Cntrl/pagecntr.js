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

exports.channel = function(req,res,callback){
    res.render('../views/channel.html');
}