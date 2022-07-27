var promiseBarrier = function(param){
    return llista=[
        f1 = function(param){
            p = new Promise((resolt, reject)=>{

            })
            return p.then(param)
        },
        f2 = function(param){
            p = new Promise((resolt, reject)=>{

            })
            return p.then(param)
        },
        f3 = function(param){
            p = new Promise((resolt, reject)=>{

            })
            return p.then(param)
        }
    ]
}


var [f1, f2, f3] = promiseBarrier(3);
Promise.resolve(0)
.then(x => { console.log("c1 s1"); return x; })
.then(x => { console.log("c1 s2"); return x; })
.then(x => { console.log("c1 s3"); return x; })
.then(f1)
.then(x => { console.log("c1 s4"); return x; })
Promise.resolve(0)
.then(x => { console.log("c2 s1"); return x; })
.then(f2)
.then(x => { console.log("c2 s2"); return x; })
Promise.resolve(0)
.then(f3)
.then(x => { console.log("c3 s1"); return x; })
.then(x => { console.log("c3 s2"); return x; })
.then(x => { console.log("c3 s3"); return x; })