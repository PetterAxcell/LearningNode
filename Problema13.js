var o2 = (function() {
    var count = 1;
    var notify = null;
    return {
    inc : function(){
        count++;
        if(notify){
            notify(count)
        }
    },
    setNotify: function(b){notify=b}
    };
})();

o2.setNotify(function (a) { console.log(a) }); 
o2.inc()


