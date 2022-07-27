fs = require('fs')

asyncComposer = function(f1, f2)
{
    return function(a, f4)
    {
        f2(a,function(err, b){
            if(!err)
            {
                f1(b, f4)
            }
            else{
                f4(err)
            }
        })
        
    }
}

f1 = function(a, callback) {callback(null, a + 1) }
f3 = asyncComposer(f1, f1)
f3(3, function(error, result) { console.log(result) } )


f1 = function(a, callback) { callback(null, a + 1) }
f2 = function(a, callback) { callback("error", "") }
f3 = asyncComposer(f1, f2)
f3(3, function(error, result) { console.log(error, result) } )

