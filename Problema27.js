const { resolve } = require('path');
fs = require('fs')
callbackToPromise = function(f){
    return function(file){     
        var a, b;
        var callback=function(err, result){
            if(err != null)
            {
                b(err)
            }
            a(result)
        }
        return new Promise((resolve, reject)=>{
            a = resolve;
            b = reject;
            f(file, callback);
        })
    }
}
readToPromise2 = callbackToPromise(fs.readFile);
readToPromise2("a1.txt").then(x => console.log("Contents: ", x))
.catch(x => console.log("Error: ", x));

