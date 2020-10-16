import { Benchmark, BenchmarkC } from "../../src/benchmark/Benchmark.js"
import { AnyConstructor } from "../../src/class/Mixin.js"

//------------------------------------------------------------------------------
const DataTypeVTable1 = {
    prop1       : (host : DataType1) => host.prop1,
    prop2       : (host : DataType1) => host.prop2
}

class DataType1 {
    prop1       : number
    prop2       : number

    sum (vtable : typeof DataTypeVTable1) : number {
        return vtable.prop1(this) + vtable.prop2(this)
    }
}

//------------------------------------------------------------------------------
const DataTypeVTable2 = {
    prop1       : (host : DataType2) => host.prop1,
    prop2       : (host : DataType2) => host.prop2,
    prop3       : (host : DataType2) => host.prop3,
    prop4       : (host : DataType2) => host.prop4
}

class DataType2 extends DataType1 {
    prop3       : number
    prop4       : number

    sum (vtable : typeof DataTypeVTable2) : number {
        return DataType1.prototype.sum.call(this, vtable) + vtable.prop3(this) + vtable.prop4(this)
    }
}
