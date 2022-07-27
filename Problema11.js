fs = require('fs')

function asyncMap (llista, f, callback2)
{
    var resultat = [];
    var callback = function(err , data){
        if (err){throw err}
        else{resultat.push(data)}
        if (resultat.length == llista.length)
            callback2(resultat)
    }

    llista.forEach(filename => f(filename , 'utf-8', callback))
}
asyncMap(['a1.txt', 'a2.txt'], fs.readFile, function(resultat){console.log(resultat)});