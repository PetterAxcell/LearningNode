function Counter() {
    this.count = 1;
    this.notify = null
    this.inc = function(){
        this.count++;
        if(this.notify){
            this.notify(this.count)
        }
    }

}

function DecreasingCounter(){
    this.inc = function(){
        this.count--;
        if(this.notify){
            this.notify(this.count)
        }
    }
}
DecreasingCounter.prototype = new Counter();
o4 = new DecreasingCounter;
o4.notify = function(a) {console.log(a)}
o4.inc()


