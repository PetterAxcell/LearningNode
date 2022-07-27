function Counter() {
    this.count = 0;
    this.notify = null
    this.inc = function(){
        this.count++;
        if(this.notify){
            this.notify(this.count)
        }
    }

}

o3 = new Counter();
o3.notify = null;
o3.inc()

o3.count = 1
o3.notify = function(a) {console.log(a)}
o3.inc()