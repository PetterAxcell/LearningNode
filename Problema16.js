fs = require("fs")

function readIntoFuture(filename){
    var future = { isDone: false, result:null }  

    var callback = function(err , data){
        if (err){throw err}
        else{future.isDone=true; future.result = data}
    }
    fs.readFile(filename, 'utf-8', callback);

    return future;
}

future = readIntoFuture('a1.txt');


setTimeout(function()
{console.log(future)}, 1000)
