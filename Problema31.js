parallelPromise = function(p1, p2){
    let a;
    p = new Promise((resolve, reject)=>{
        a = resolve
    })
    a([p1,p2])
    return p
    
}
//First part
var p1 = parallelPromise(Promise.resolve(0), Promise.resolve(1));
p1.then(console.log);
//Second part
var plast = new Promise((resolve, reject) =>
setTimeout(() => resolve(0), 200));
var pfirst = new Promise((resolve, reject) =>
setTimeout(() => resolve(1), 100));
var p2 = parallelPromise(plast, pfirst);
p2.then(console.log);
setTimeout(() => p2.then(console.log), 300)