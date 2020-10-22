function HasVTable(arg) {
    const res = function () { return arg }

    res.call = arg

    return res
}

const Class1 = function () {}
Class1.prototype = HasVTable({ vtableFor : 'class1_vtable', someOtherProp : [] })
// Class1.prototype.call = { vtableFor : 'class1_vtable', someOtherProp : [] }
// Class1.prototype.some1 = function () {}

const Class2 = function () {}
Class2.prototype = HasVTable({ vtableFor : 'class2_vtable', someOtherProp : [] })
// Class2.prototype.call = { vtableFor : 'class2_vtable', someOtherProp : [] }
// Class2.prototype.some2 = function () {}

const Class3 = function () {}
Class3.prototype = HasVTable({ vtableFor : 'class3_vtable', someOtherProp : [] })
// Class3.prototype.call = { vtableFor : 'class3_vtable', someOtherProp : [] }
// Class3.prototype.some3 = function () {}

const Class4 = function () {}
Class4.prototype = HasVTable({ vtableFor : 'class4_vtable', someOtherProp : [] })
// Class4.prototype.call = { vtableFor : 'class4_vtable', someOtherProp : [] }
// Class4.prototype.some4 = function () {}

const Class5 = function () {}
Class5.prototype = HasVTable({ vtableFor : 'class5_vtable', someOtherProp : [] })
// Class5.prototype.call = { vtableFor : 'class5_vtable', someOtherProp : [] }
// Class5.prototype.some5 = function () {}


function access(obj) {
    console.log(Object.getPrototypeOf(obj).call);
}

%OptimizeFunctionOnNextCall(access);

%OptimizeFunctionOnNextCall(Class1);
%OptimizeFunctionOnNextCall(Class2);
%OptimizeFunctionOnNextCall(Class3);
%OptimizeFunctionOnNextCall(Class4);
%OptimizeFunctionOnNextCall(Class5);

access(new Class1);
access(new Class2);
access(new Class3);
access(new Class4);
access(new Class5);
