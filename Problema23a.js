p = Promise.resolve(0).then(x=>x+1).then(x=>x+2).then(x=>x+4);
p.then(x=>console.log(x))