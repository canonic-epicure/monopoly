import { Benchmark, BenchmarkC } from "../benchmark/Benchmark.js"
import { AnyConstructor } from "../class/Mixin.js"

//------------------------------------------------------------------------------
const DataType0VTable = {
    prop0_0_w       : (host : DataType0, value) => host.prop0_0 = value,
    prop0_1_w       : (host : DataType0, value) => host.prop0_1 = value,
    prop0_2_w       : (host : DataType0, value) => host.prop0_2 = value,
    prop0_3_w       : (host : DataType0, value) => host.prop0_3 = value,
    prop0_4_w       : (host : DataType0, value) => host.prop0_4 = value,

    prop0_0         : (host : DataType0) => host.prop0_0,
    prop0_1         : (host : DataType0) => host.prop0_1,
    prop0_2         : (host : DataType0) => host.prop0_2,
    prop0_3         : (host : DataType0) => host.prop0_3,
    prop0_4         : (host : DataType0) => host.prop0_4,
}

class DataType0 {
    prop0_0         : number    = 0
    prop0_1         : number    = 0
    prop0_2         : number    = 0
    prop0_3         : number    = 0
    prop0_4         : number    = 0

    get vtable () : typeof DataType0VTable {
        return DataType0VTable
    }
}

//------------------------------------------------------------------------------
const DataType1VTable = {
    prop0_0_w       : (host : DataType1, value) => host.prop0_0 = value,
    prop0_1_w       : (host : DataType1, value) => host.prop0_1 = value,
    prop0_2_w       : (host : DataType1, value) => host.prop0_2 = value,
    prop0_3_w       : (host : DataType1, value) => host.prop0_3 = value,
    prop0_4_w       : (host : DataType1, value) => host.prop0_4 = value,

    prop0_0         : (host : DataType1) => host.prop0_0,
    prop0_1         : (host : DataType1) => host.prop0_1,
    prop0_2         : (host : DataType1) => host.prop0_2,
    prop0_3         : (host : DataType1) => host.prop0_3,
    prop0_4         : (host : DataType1) => host.prop0_4,

    prop1_0_w       : (host : DataType1, value) => host.prop1_0 = value,
    prop1_1_w       : (host : DataType1, value) => host.prop1_1 = value,

    prop1_0         : (host : DataType1) => host.prop1_0,
    prop1_1         : (host : DataType1) => host.prop1_1,
}

class DataType1 extends DataType0 {
    prop1_0         : number    = 0
    prop1_1         : number    = 0

    get vtable () : typeof DataType1VTable {
        return DataType1VTable
    }
}

//------------------------------------------------------------------------------
const DataType2VTable = {
    prop0_0_w       : (host : DataType2, value) => host.prop0_0 = value,
    prop0_1_w       : (host : DataType2, value) => host.prop0_1 = value,
    prop0_2_w       : (host : DataType2, value) => host.prop0_2 = value,
    prop0_3_w       : (host : DataType2, value) => host.prop0_3 = value,
    prop0_4_w       : (host : DataType2, value) => host.prop0_4 = value,

    prop0_0         : (host : DataType2) => host.prop0_0,
    prop0_1         : (host : DataType2) => host.prop0_1,
    prop0_2         : (host : DataType2) => host.prop0_2,
    prop0_3         : (host : DataType2) => host.prop0_3,
    prop0_4         : (host : DataType2) => host.prop0_4,

    prop2_0_w       : (host : DataType2, value) => host.prop2_0 = value,
    prop2_1_w       : (host : DataType2, value) => host.prop2_1 = value,

    prop2_0         : (host : DataType2) => host.prop2_0,
    prop2_1         : (host : DataType2) => host.prop2_1,
}

class DataType2 extends DataType0 {
    prop2_0         : number    = 0
    prop2_1         : number    = 0

    get vtable () : typeof DataType2VTable {
        return DataType2VTable
    }
}

//------------------------------------------------------------------------------
const DataType3VTable = {
    prop0_0_w       : (host : DataType3, value) => host.prop0_0 = value,
    prop0_1_w       : (host : DataType3, value) => host.prop0_1 = value,
    prop0_2_w       : (host : DataType3, value) => host.prop0_2 = value,
    prop0_3_w       : (host : DataType3, value) => host.prop0_3 = value,
    prop0_4_w       : (host : DataType3, value) => host.prop0_4 = value,

    prop0_0         : (host : DataType3) => host.prop0_0,
    prop0_1         : (host : DataType3) => host.prop0_1,
    prop0_2         : (host : DataType3) => host.prop0_2,
    prop0_3         : (host : DataType3) => host.prop0_3,
    prop0_4         : (host : DataType3) => host.prop0_4,

    prop3_0_w       : (host : DataType3, value) => host.prop3_0 = value,
    prop3_1_w       : (host : DataType3, value) => host.prop3_1 = value,

    prop3_0         : (host : DataType3) => host.prop3_0,
    prop3_1         : (host : DataType3) => host.prop3_1,
}

class DataType3 extends DataType0 {
    prop3_0         : number    = 0
    prop3_1         : number    = 0

    get vtable () : typeof DataType3VTable {
        return DataType3VTable
    }
}

//------------------------------------------------------------------------------
const DataType4VTable = {
    prop0_0_w       : (host : DataType4, value) => host.prop0_0 = value,
    prop0_1_w       : (host : DataType4, value) => host.prop0_1 = value,
    prop0_2_w       : (host : DataType4, value) => host.prop0_2 = value,
    prop0_3_w       : (host : DataType4, value) => host.prop0_3 = value,
    prop0_4_w       : (host : DataType4, value) => host.prop0_4 = value,

    prop0_0         : (host : DataType4) => host.prop0_0,
    prop0_1         : (host : DataType4) => host.prop0_1,
    prop0_2         : (host : DataType4) => host.prop0_2,
    prop0_3         : (host : DataType4) => host.prop0_3,
    prop0_4         : (host : DataType4) => host.prop0_4,

    prop4_0_w       : (host : DataType4, value) => host.prop4_0 = value,
    prop4_1_w       : (host : DataType4, value) => host.prop4_1 = value,

    prop4_0         : (host : DataType4) => host.prop4_0,
    prop4_1         : (host : DataType4) => host.prop4_1,
}

class DataType4 extends DataType0 {
    prop4_0         : number    = 0
    prop4_1         : number    = 0

    get vtable () : typeof DataType4VTable {
        return DataType4VTable
    }
}


//------------------------------------------------------------------------------
const size = 30000

const generate = () => {
    const instances = []

    do {
        instances.push(new DataType0())
        instances.push(new DataType1())
        instances.push(new DataType2())
        instances.push(new DataType3())
        instances.push(new DataType4())
    } while (instances.length < size)

    return instances
}

const instantiate = BenchmarkC({
    name        : 'Instantiate monopoly',
    cycle () {
        return generate()
    }
})

//------------------------------------------------------------------------------
const access = BenchmarkC<DataType0[]>({
    name        : 'Access monopoly',

    async setup () {
        return generate()
    },

    cycle (iteration : number, cycle : number, state : DataType0[]) {
        for (let i = 0; i < size; i++) {
            const instance  = state[ i ]
            const vtable    = instance.vtable

            vtable.prop0_0_w(instance, vtable.prop0_0(instance) + 3)
            vtable.prop0_1_w(instance, vtable.prop0_1(instance) + 3)
            vtable.prop0_2_w(instance, vtable.prop0_2(instance) + 3)
            vtable.prop0_3_w(instance, vtable.prop0_3(instance) + 3)
            vtable.prop0_4_w(instance, vtable.prop0_4(instance) + 3)
        }
    }
})

const run = async () => {
    // await instantiate.measureTillMaxTime()
    await access.measureTillMaxTime()
}

run()
