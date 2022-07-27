antipromise = function (p_def)
{
    return new Promise((resolve, reject)=>{
        p_def.then(reject, resolve)
    })
    //return p_def.then(function(p_def){throw p_def}, x => x)
}

antipromise(Promise.reject(0)).then(console.log);
antipromise(Promise.resolve(8)).catch(console.log);