antipromise = function (p_def)
{
    return new Promise((resolve, reject)=>{
        p_def.then(reject, resolve)
    })
}
mergedPromise = function(prom){
    return prom.then(x=>x, x => antipromise(prom))
}
mergedPromise(Promise.resolve(0)).then(console.log);
mergedPromise(Promise.reject(1)).then(console.log);