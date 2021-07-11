import { BenchmarkC } from "../benchmark/Benchmark.js"

class A {a = 1} // [/*a*/1]
class B extends A {b = 2}//[/*a*/1, /*b*/,2]
class C extends A {c = 2}//[/*a*/1, /*c*/,2]
class D extends A, B {d = 3}// [/*a*/1, /*b*/,2 /*c*/,3, /*d*/,3]


const Mixin = (base) => class extends base  {
    mixProp : number
    mixMethod () : number { return }
}

// @monopoly()
// class DataType0 {
//     // index 0
//     prop0_0       : number    = 0
//     // index 1
//     prop0_1       : number    = 0
//     // index 2
//     prop0_2       : number    = 0
//     // index 3
//     prop0_3       : number    = 0
//     // index 4
//     prop0_4       : number    = 0
//
//     constructor () {
//     }
// }

abstract class DataTypeM {
    prop0_0       : number
    prop0_1       : number

    sum () : number {
        return this.prop0_0 + this.prop0_1
    }
}

const impl : DataTypeM = magic(DataTypeM)

impl.sum()

new DataType0()
DataType0.new()


const sum = function (self : DataType0) : number {
    return self.prop0_0 + self.prop0_1 + self.prop0_2 + self.prop0_3 + self.prop0_4
}


const DataType0M = function () {
    return [ VTABLE, 0, 0, 0, 0, 0 ]
}

const sumM = function (self : DataType0) : number {
    return self[ 0 ] + self[ 1 ] + self[ 2 ] + self[ 3 ] + self[ 4 ]
}

const sumMV = function (self : DataType0) : number {
    const VTABLE = self[ 0 ]

    return self[ VTABLE.prop0_0 ] + self[ VTABLE.prop0_1 ] + self[ VTABLE.prop0_2 ] + self[ VTABLE.prop0_3 ] + self[ VTABLE.prop0_4 ]
}
