/**
 * Created by GiBeomHong on 2016. 8. 18..
 */
var nodemailer = require('nodemailer');
var fs = require('fs');
var smtpTransport = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'yonkotv.contact',
        pass: 'dusrhxlql0626'//연고티비0626
    }
});


exports.contact = function(req,res,callback){
    var name = req.body.name;
    var email = req.body.email;
    var msg = "문의 내용은 다음과 같습니다. \n============================\n"
        +" \n"+req.body.message +" \n"+" \n" + "from :" + name + ' <' +  email +  '>';


    var mailOptions = {
        from: name + ' <' +  email +  '>',
        to: 'yonkotv.contact@gmail.com',
        subject:'[기타문의]'+ name+ ' 님의 기타문의 메일 입니다.' ,
        text: msg
    };


    //console.log(mailOptions);


    smtpTransport.sendMail(mailOptions, function(error, response){

        if (error){
            console.log(error);
        } else {
            console.log("Message sent : " + response.message);
        }
        smtpTransport.close();
    });




    res.redirect('/etc_contact');

}

exports.ad_contact = function (req,res,callback) {

    var name = req.body.name;
    var email = req.body.email;
    var company = req.body.company;
    var homepage = req.body.homepage;
    var phone = req.body.phone;
    var title = req.body.title;
    var message = req.body.context;


    var msg = "제목 :  " + title + " \n"
        +" \n"+message +" \n"+" \n" + "[광고 문의자] \n" + " 이름 : " + name + "\n email : " +  email +  "\n 회사 : " + company +" (회사 홈페이지 : "+ homepage +")" +"\n 연락처 : " + phone +"\n";

    var mailOptions = {
        from: name + ' < ' +  email +  ' >',
        to: 'yonkotv.contact@gmail.com',
        subject:'[광고문의]'+ name+ ' 님의 광고문의 메일 입니다.' ,
        text: msg
    };


    //console.log(mailOptions);


    smtpTransport.sendMail(mailOptions, function(error, response){

        if (error){
            console.log(error);
        } else {
            console.log("Message sent : " + response.message);
        }
        smtpTransport.close();
    });




    res.redirect('/ad_contact');

}








