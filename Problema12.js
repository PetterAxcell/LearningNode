var o1 =  {
    count : 0,
    notify : null,
    inc : function(){
        this.count++;
        if(this.notify){
            this.notify(this.count)
        }
    }

}

o1.notify = null;
o1.inc()

o1.count = 1
o1.notify = function(a) {console.log(a)}
o1.inc()