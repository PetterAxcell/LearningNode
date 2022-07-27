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
            else{future.isDone=true; future.result = data}
        }
        f(filename, 'utf-8', callback);
    
        return future;
    }

}


readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
enhancedFuture = readIntoEnhancedFuture('a1.txt');
setTimeout(function() { enhancedFuture.registerCallback( function(ef) {console.log(ef) } )}, 1000)

