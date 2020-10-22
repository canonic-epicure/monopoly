function HasVTable(arg) {
    return function () { return arg }
}

const Class1 = function () {}
Class1.prototype = HasVTable('class1_vtable')
Class1.prototype.some1 = function () {}

const Class2 = function () {}
Class2.prototype = HasVTable('class2_vtable')
Class2.prototype.some2 = function () {}

const Class3 = function () {}
Class3.prototype = HasVTable('class3_vtable')
Class3.prototype.some3 = function () {}

const Class4 = function () {}
Class4.prototype = HasVTable('class4_vtable')
Class4.prototype.some4 = function () {}

const Class5 = function () {}
Class5.prototype = HasVTable('class5_vtable')
Class5.prototype.some5 = function () {}


function access(obj) {
    console.log(Object.getPrototypeOf(obj)());
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
