Object.prototype.vtable = null

class HasVTable {}

class Class1 extends HasVTable {
    *[Symbol.iterator] () {
        yield 'Class1'
    }
}
class Class2 extends HasVTable {
    *[Symbol.iterator] () {
        yield 'Class2'
    }
}
class Class3 extends HasVTable {
    *[Symbol.iterator] () {
        yield 'Class3'
    }
}
class Class4 extends HasVTable {
    *[Symbol.iterator] () {
        yield 'Class4'
    }
}
class Class5 extends HasVTable {
    *[Symbol.iterator] () {
        yield 'Class5'
    }
}

function access(obj) {
    const proto = Object.getPrototypeOf(obj)

    let res

    for (res of proto) break

    console.log(res)
}

%OptimizeFunctionOnNextCall(access);

access(new Class1);
access(new Class2);
access(new Class3);
access(new Class4);
access(new Class5);
