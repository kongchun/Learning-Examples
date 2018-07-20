var Client = require('ftp'); 
var path = require('path');
var fs = require('fs');
   
  var c = new Client();  
  c.on('ready', function() {  
     c.list(function(err, list) {  
      if (err) throw err;  
      dirList(list);
      c.end();  
    });  
  });  
  // connect to localhost:21 as anonymous  
  var option={host:"10.8.0.240","port":21,"user":"suzhou","password":"888888"}  
  c.connect(option);  

var url = "C:\\Users\\kongchun\\Desktop\\test";

  function dirList(list){
     list.forEach(function (element, index, array) {
            //Ignore directories
            if (element.type === 'd') {
                console.log('ignoring directory ' + element.name);
                return;
            }
            //Ignore non zips
            if (path.extname(element.name) !== '.zip') {
                console.log('ignoring file ' + element.name);
                return;
            }
            //Download files
            c.get(element.name, function (err, stream) {
                if (err) throw err;
                stream.once('close', function () {
                    c.end();
                });
                stream.pipe(fs.createWriteStream(url+element.name));
            });
        });
  }