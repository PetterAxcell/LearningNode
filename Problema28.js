fs = require('fs')

const { throws } = require("assert")

fs = require("fs")

function asyncToEnhancedFuture(f){
    return f2 = function(filename){
        var future = { isDone: false, result:null,  registerCallback:
            function(fp)
            {  
                if(this.isDone){
                    fp(this)
                }
               
            }
        }
        var callback = function(err , data){
            if (err){throw err}
            else{future.isDone=true; future.result = data;}
        }
        f(filename, 'utf-8', callback);
    
        return future;
    }

}
enhancedFutureToPromise = function(enhancedFuture){
    var a;
    p = new Promise((result, reject) => {
        a = result;
    })
    a(enhancedFuture)
    return p
}

readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile)
var enhancedFuture = readIntoEnhancedFuture('a1.txt');
var promise = enhancedFutureToPromise(enhancedFuture);
console.log(promise)
setTimeout(function(){promise.then(console.log)}, 2000)