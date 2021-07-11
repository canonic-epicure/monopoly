import { BenchmarkC } from "../src/benchmark/Benchmark.js"

//----------------------------------------------------------
const Mixin0VTable = {
    SUPER           : undefined,

    prop0_0         : 1,
    prop0_1         : 2,

    sum (VTABLE) {
        return this[ VTABLE.prop0_0 ] + this[ VTABLE.prop0_1 ]
    }
}

const Mixin0Constructor = () => [ Mixin0VTable, 0, 0 ]

export const Mixin0 = {
    new     : Mixin0Constructor
}

const mixin0 = Mixin0.new(), mixin0VTable = mixin0[ 0 ]
mixin0[ mixin0VTable.prop0_0 ] = 1
// or
const mixin01 = Mixin0.new(), mixin0VTable = mixin0[ 0 ]
mixin0[ mixin0VTable.prop0_0 ] = 1



mixin0VTable.sum.call(mixin0, mixin0VTable)


const Mixin0InMixin2VTable = {
    SUPER           : undefined,

    prop0_0         : 1,
    prop0_1         : 2,
    prop1_0         : NaN,
    prop1_1         : NaN,
    prop2_0         : NaN,
    prop2_1         : NaN,

    sum             : eval(Mixin0VTable.sum.toString())
}


//----------------------------------------------------------
const Mixin1VTable = {
    SUPER           : undefined,

    prop1_0         : 1,
    prop1_1         : 2
}

const Mixin1Constructor = () => [ Mixin1VTable, 0, 0 ]


const Mixin1InMixin2VTable = {
    SUPER           : Mixin0InMixin2VTable,

    prop0_0         : 1,
    prop0_1         : 2,
    prop1_0         : 3,
    prop1_1         : 4,
    prop2_0         : NaN,
    prop2_1         : NaN,

    sum             : Mixin0InMixin2VTable.sum
}

const Mixin1InMixin2Constructor = () => [ Mixin1InMixin2VTable, 0, 0 ]


const Mixin2VTable = {
    SUPER           : Mixin1InMixin2VTable,

    prop0_0         : 1,
    prop0_1         : 2,
    prop1_0         : 3,
    prop1_1         : 4,
    prop2_0         : 5,
    prop2_1         : 6,

    sum (VTABLE) {
        const SUPER     = VTABLE.SUPER
        // or
        const SUPER_    = Mixin1InMixin2VTable

        return SUPER.sum.call(this, SUPER)
            + this[ VTABLE.prop2_0 ] + this[ VTABLE.prop2_1 ]
            + this[ VTABLE.prop1_0 ] + this[ VTABLE.prop1_1 ]
    }
}


const Mixin2Constructor = () => [ Mixin2VTable, 0, 0, 0, 0, 0, 0 ]
