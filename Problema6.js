b = f2;
c = function(r){console.log(r)};
f5 = function (a,b,c){
	c(b(a));
}
f5(1, b, c);