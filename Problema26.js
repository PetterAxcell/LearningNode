const { resolve } = require('path');
fs = require('fs')
readToPromise = function(file){
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
        fs.readFile(file, callback);
    })
}
readToPromise("notfound.txt").then(x => console.log("Contents: ", x))
.catch(x => console.log("Error: ", x));
