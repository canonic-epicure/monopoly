function HasVTable(arg) {
    return function () { return arg }
}

const Class1 = function (arg) { return arg }
Class1.call = { vtable : [ 'Class1' ] }
// Class1.prototype = HasVTable('class1_vtable')
// Class1.prototype.some1 = function () {}

const Class2 = function () {}
Class2.call = { vtable : [ 'Class2' ] }
// Class2.prototype = HasVTable('class2_vtable')
// Class2.prototype.some2 = function () {}

const Class3 = function () {}
Class3.call = { vtable : [ 'Class3' ] }
// Class3.prototype = HasVTable('class3_vtable')
// Class3.prototype.some3 = function () {}

const Class4 = function () {}
Class4.call = { vtable : [ 'Class4' ] }
// Class4.prototype = HasVTable('class4_vtable')
// Class4.prototype.some4 = function () {}

const Class5 = function () {}
Class5.call = { vtable : [ 'Class5' ] }
// Class5.prototype = HasVTable('class5_vtable')
// Class5.prototype.some5 = function () {}


function access(obj) {
    console.log(obj.call);
}

%OptimizeFunctionOnNextCall(access);

// %OptimizeFunctionOnNextCall(Class1);
// %OptimizeFunctionOnNextCall(Class2);
// %OptimizeFunctionOnNextCall(Class3);
// %OptimizeFunctionOnNextCall(Class4);
// %OptimizeFunctionOnNextCall(Class5);

access(Class1);
access(Class2);
access(Class3);
access(Class4);
access(Class5);
