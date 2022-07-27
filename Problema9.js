fs = require('fs')

f6 = function(llista, callback_final){  
    var resultat = []
    llista.forEach(element => {
        resultat.push(0)
    });

    var f7 = function(element, index){
       var callback = function(err, data){
            resultat[index] = data;
            if (!resultat.includes(0)){
                callback_final(resultat)}
       }
       fs.readFile(element, 'utf-8', callback)
    }

    llista.forEach(f7)
}

llista = ['a1.txt', 'a2.txt'];
f6(llista, function (resultat) { console.log(resultat) });