/**
 * Created by GiBeomHong on 2016. 8. 18..
 */
var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'yonkotv.contact',
        pass: 'yonkotv0626'
    }
});

exports.contact = function(req,res,callback){
    var name = req.body.name;
    var email = req.body.email;
    var msg = "문의 내용은 다음과 같습니다. \n ==========================="
        +" \n"+req.body.message +" \n"+" \n" + "from :" + name + ' <' +  email +  '>';


    var mailOptions = {
        from: name + ' <' +  email +  '>',
        to: 'yonkotv.contact@gmail.com',
        subject: name+ ' 님의 문의 메일 입니다.' ,
        text: msg
    };


    console.log(mailOptions);


    smtpTransport.sendMail(mailOptions, function(error, response){

        if (error){
            console.log(error);
        } else {
            console.log("Message sent : " + response.message);
        }
        smtpTransport.close();
    });




    res.redirect('/');

}








