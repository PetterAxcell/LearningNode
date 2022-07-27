composer = function(f1, f2)
{
    return function(a)
    {
        b = f2(a)
        c = f1(b)
        return c
    }
}

f1 = function(a) { return a + 1 }
f3 = composer(f1, f1)
f3(3)


f4 = function(a) { return a * 3 }
f5 = composer(f3, f4)
f5(3)
