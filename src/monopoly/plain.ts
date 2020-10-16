import { Benchmark, BenchmarkC } from "../benchmark/Benchmark.js"

//------------------------------------------------------------------------------
class DataType0 {
    prop0_0       : number    = 0
    prop0_1       : number    = 0
    prop0_2       : number    = 0
    prop0_3       : number    = 0
    prop0_4       : number    = 0

    sum () : number {
        return this.prop0_0 + this.prop0_1 + this.prop0_2 + this.prop0_3 + this.prop0_4
    }
}

//------------------------------------------------------------------------------
class DataType1 extends DataType0 {
    prop1_0       : number    = 0
    prop1_1       : number    = 0

    sum () : number {
        return DataType0.prototype.sum.call(this) + this.prop1_0 + this.prop1_1
    }
}

//------------------------------------------------------------------------------
class DataType2 extends DataType0 {
    prop2_0       : number    = 0
    prop2_1       : number    = 0

    sum () : number {
        return DataType0.prototype.sum.call(this) + this.prop2_0 + this.prop2_1
    }
}

//------------------------------------------------------------------------------
class DataType3 extends DataType0 {
    prop3_0       : number    = 0
    prop3_1       : number    = 0

    sum () : number {
        return DataType0.prototype.sum.call(this) + this.prop3_0 + this.prop3_1
    }
}

//------------------------------------------------------------------------------
class DataType4 extends DataType0 {
    prop4_0       : number    = 0
    prop4_1       : number    = 0

    sum () : number {
        return DataType0.prototype.sum.call(this) + this.prop4_0 + this.prop4_1
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
        // instances.push(new DataType4())
    } while (instances.length < size)

    return instances
}

const instantiate = BenchmarkC({
    name        : 'Instantiate plain',
    cycle () {
        return generate()
    }
})

//------------------------------------------------------------------------------
const access = BenchmarkC<DataType0[]>({
    name        : 'Access plain',

    async setup () {
        return generate()
    },

    cycle (iteration : number, cycle : number, state : DataType0[]) {
        for (let i = 0; i < size; i++) {
            const instance = state[ i ]

            instance.prop0_0 = instance.prop0_0 + 3
            instance.prop0_1 = instance.prop0_1 + 3
            instance.prop0_2 = instance.prop0_2 + 3
            instance.prop0_3 = instance.prop0_3 + 3
            instance.prop0_4 = instance.prop0_4 + 3
        }
    }
})

const run = async () => {
    await instantiate.measureTillMaxTime()
    await access.measureTillMaxTime()
}

run()
