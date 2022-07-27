fs = require('fs')

callback_final = function(resultat){
    console.log(resultat)
}

f6 = function(llista, callback_final){  
    var resultat = [];

    var callback = function(err, data){
        if (err){throw err}
            else{resultat.push(data)}
            if (resultat.length == llista.length)
                callback_final(resultat)
    
    }

    llista.forEach(filename => fs.readFile(filename, 'utf-8', callback))
}

llista = ['a1.txt', 'a2.txt'];
f6(llista, callback_final);