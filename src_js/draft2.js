const d0    = {}
d0.prop0    = 1

const d1    = {}
d1.prop0    = 1
d1.prop1    = 1

const d2    = {}
d2.prop0    = 1
d2.prop1    = 1
d2.prop2    = 1

const d3    = {}
d3.prop0    = 1
d3.prop1    = 1
d3.prop2    = 1
d3.prop3    = 1

const d4    = {}
d4.prop0    = 1
d4.prop1    = 1
d4.prop2    = 1
d4.prop3    = 1
d4.prop4    = 1

function access(obj) {
    console.log(obj.prop0);
}

%OptimizeFunctionOnNextCall(access);

access(d0);
access(d1);
access(d2);
access(d3);
access(d4);
