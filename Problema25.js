promiseToCallback = function(f)
{  
    var a, b;
    return function(par_f, callback){
        p2 = f(par_f);
        p2.then((res)=>callback(null,res), (req)=>callback(req, null))
    }

}

var isEven = x => new Promise(
    (resolve, reject) => x % 2 ? reject(x) : resolve(x)
    );
var isEvenCallback = promiseToCallback(isEven);
isEven(2).then(() => console.log("OK"), () => console.log("KO"));
isEvenCallback(2, (err, res) => console.log(err, res));
isEven(3).then(() => console.log("OK"), () => console.log("KO"));
isEvenCallback(3, (err, res) => console.log(err, res));
    