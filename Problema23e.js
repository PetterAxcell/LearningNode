p = Promise.reject(0).then(x => x + 1).catch(x => x + 2).catch(x => x + 4);
p.then(x=>console.log(x));