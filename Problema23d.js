p = Promise.reject(0).then(x => x + 1).then(x => x + 2).catch(x => x + 4).then(x => x + 8);
p.then(x=>console.log(x));