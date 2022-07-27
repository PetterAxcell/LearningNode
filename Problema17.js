fs = require("fs")

function asyncToFuture(f){

    return f2 = function(filename){
        var future = { isDone: false, result:null }  
    
        var callback = function(err , data){
            if (err){throw err}
            else{future.isDone=true; future.result = data}
        }
        f(filename, callback);
    
        return future;
    }

}

readIntoFuture2 = asyncToFuture(fs.readFile)
future2a = readIntoFuture2('a1.txt')
setTimeout(function(){console.log(future2a)}, 1000)


statIntoFuture = asyncToFuture(fs.stat);
future2b = statIntoFuture('a1.txt');
setTimeout(function() { console.log(future2b) }, 1000)