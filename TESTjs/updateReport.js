/* customized mocha report*/

    var timeout = setInterval(function() {
        var today = new Date();
        var month = today.getMonth();
        var date =  today.getDate();
        var year =  today.getFullYear();
        var hours =  today.getHours();
        var minutes = today.getMinutes() ;
        var seconds = today.getSeconds();
        var monthh = Number(month) + 1;

        var fulldate = year +'-'+monthh+'-'+date + ' ' + hours + ':' +minutes + ':' + seconds;
        console.log('dates :'+fulldate);
 
        var a ="<center><h2><img src=data:image/jpeg;base64,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 title='QASource' alt='QASource' name='graphics1' align='CENTER' border='0' height='100' width='350'></h2></center>";
    	var fs = require('file-system');
        var file = '../PasteNodejs/report.html';
        	var file_path = '../PasteNodejs/report.html';
        	//var new_text = '<img src="../PasteNodejs/logo.jpg" align="left"><font size="6"><b><center>Fifty Three Web Product Paste Report</center></b></font>';
        	var new_text = '<center><h1 style="color:#5D7B9D">Fifty Three Web Product Paste Report '+ fulldate +'<h1></center>' + a;
            var position;
        	var fs = require('file-system');
        		fs.readFile(file_path, function read(err, data) {
        		    if (err) {
        		        throw err;
        		    }
        		    var file_content = data.toString();
        		    position = file_content.lastIndexOf('<body>');
                      if(file_content.includes(new_text))
                  
                    {

                    }
                    else
                    {
                    file_content = file_content.substring(position);
        		    var file = fs.openSync(file_path,'r+');
        		    var bufferedText = new Buffer(new_text+file_content);
        		    fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
        		    fs.close(file);
                }
        		});	
        	clearInterval(timeout);
    }, timeout);
