/**
 * Created by GiBeomHong on 2016. 8. 7..
 */

var fs = require('fs');
var LineByLineReader = require('line-by-line');

function parse(filename) {

    var flagrealdata = false; //해당 줄이 Comment인지의 유를 판별하는 boolean
    var db; // 정리된 데이터를 넣는 array
    var dbtype = 0; // 0이면 id, 1이면 comment, 2이면 star(별풍선)
    var countid = 0;
    var countcomment = 0;
    var countstar = 0;


    var lr = new LineByLineReader("../KB/public/textstorage/1234.txt");
    lr.on('line', function(line) {

        var cus = {
            "ID" : "",
            "Comment" : "[]",
            "star" : "0"
        }

        var cusobj = JSON.parse(cus);


        if (flagrealdata) {

            switch (dbtype) {
                case 1:
                    var a = line.substring(line.indexof("(")+1, line.indexof(")"));
                    cusobj.ID = a;
                    cusobj.Comment = line;
                    a = "";
                    countcomment++;
                    console.log("Parsing Comment"+countcomment);

                case 2:
                    cus.star =int(line.substring(line.indexof(" ")+1, line.indexof("개")));
                    countstar++;
                    console.log("Parsing star"+countstar);
            }



        } else {

            if(line.search(")") && line[line.lastindexof(")")+2] == ":") {
                dbtype = 0;
                countid++;
                console.log("Parsing ID"+countid);
                dbtype = 1;
            } else if (line.lastindexof(")") == line.length) {
                dbtype = 2;
            }
        }
        db.append(cusobj);
    });

    console.log(db);

};

    exports.event = function(req,res,callback){

        //var text = fs.readFileSync('../KB/public/textstorage/1234.txt', 'utf8');
        //console.log(text);


        var flagrealdata = false; //해당 줄이 Comment인지의 유를 판별하는 boolean
        var db; // 정리된 데이터를 넣는 array
        var dbtype = 0; // 0이면 id, 1이면 comment, 2이면 star(별풍선)
        var countid = 0;
        var countcomment = 0;
        var countstar = 0;


        var lr = new LineByLineReader('../KB/public/textstorage/1234.txt');

        lr.on('line', function(line) {

            var cusobj = {
                "ID" : "",
                "Comment" : "[]",
                "star" : "0"
            }




            if (flagrealdata) {

                switch (dbtype) {
                    case 1:
                        var a = line.substring(line.indexOf("(")+1, line.indexOf(")"));
                        console.log("a is " + a);
                        cusobj.ID = a;
                        cusobj.Comment = line;
                        a = "";
                        countcomment++;
                        //console.log("Parsing Comment"+countcomment);

                    case 2:
                        cusobj.star =parseInt(line.substring(line.indexOf(" ")+1, line.indexOf("개")));
                        countstar++;
                        //console.log("Parsing star"+countstar);
                }


                flagrealdata = false;
            } else {
                if(line.indexOf(")") && line[line.lastIndexOf(")")+2] == ":"){
                //if(line.search(")") && line[line.lastindexof(")")+2] == ":") {
                    dbtype = 0;
                    countid++;
                    //console.log("Parsing ID"+countid);
                    dbtype = 1;
                    flagrealdata = true;
                } else if (line.lastIndexOf(")") == line.length) {
                    dbtype = 2;
                    flagrealdata = true;
                }

            }
            db += cusobj;
            console.log("=======")
            console.log("ID is "+ cusobj.ID)
            console.log("Comment is "+cusobj.Comment)
            console.log("Star is "+cusobj.star)
            console.log("=======")


        });

            //console.log(countcomment);


    }