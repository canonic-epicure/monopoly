import { BenchmarkC } from "../benchmark/Benchmark.js"

class DataType0 {
    prop0_0       : number    = 0

    get_prop0_0 () : number {
        return this.prop0_0
    }
    set_prop0_0 (value : number) {
        this.prop0_0 = value
    }


    prop0_1       : number    = 0

    get_prop0_1 () : number {
        return this.prop0_1
    }
    set_prop0_1 (value : number) {
        this.prop0_1 = value
    }


    prop0_2       : number    = 0

    get_prop0_2 () : number {
        return this.prop0_2
    }
    set_prop0_2 (value : number) {
        this.prop0_2 = value
    }


    prop0_3       : number    = 0

    get_prop0_3 () : number {
        return this.prop0_3
    }
    set_prop0_3 (value : number) {
        this.prop0_3 = value
    }


    prop0_4       : number    = 0

    get_prop0_4 () : number {
        return this.prop0_4
    }
    set_prop0_4 (value : number) {
        this.prop0_4 = value
    }

    [Symbol.toPrimitive] () {
        return '0'
    }
}


//------------------------------------------------------------------------------
class DataType1 extends DataType0 {
    prop1_0       : number    = 0

    get_prop1_0 () : number {
        return this.prop1_0
    }
    set_prop1_0 (value : number) {
        this.prop1_0 = value
    }

    prop1_1       : number    = 0

    get_prop1_1 () : number {
        return this.prop1_1
    }
    set_prop1_1 (value : number) {
        this.prop1_1 = value
    }

    [Symbol.toPrimitive] () {
        return '1'
    }
}


//------------------------------------------------------------------------------
class DataType2 extends DataType0 {
    prop2_0       : number    = 0

    get_prop2_0 () : number {
        return this.prop2_0
    }
    set_prop2_0 (value : number) {
        this.prop2_0 = value
    }

    prop2_1       : number    = 0

    get_prop2_1 () : number {
        return this.prop2_1
    }
    set_prop2_1 (value : number) {
        this.prop2_1 = value
    }

    [Symbol.toPrimitive] () {
        return '2'
    }
}


//------------------------------------------------------------------------------
class DataType3 extends DataType0 {
    prop3_0       : number    = 0

    get_prop3_0 () : number {
        return this.prop3_0
    }
    set_prop3_0 (value : number) {
        this.prop3_0 = value
    }

    prop3_1       : number    = 0

    get_prop3_1 () : number {
        return this.prop3_1
    }
    set_prop3_1 (value : number) {
        this.prop3_1 = value
    }

    [Symbol.toPrimitive] () {
        return '3'
    }
}


//------------------------------------------------------------------------------
class DataType4 extends DataType0 {
    prop4_0       : number    = 0

    get_prop4_0 () : number {
        return this.prop4_0
    }
    set_prop4_0 (value : number) {
        this.prop4_0 = value
    }

    prop4_1       : number    = 0

    get_prop4_1 () : number {
        return this.prop4_1
    }
    set_prop4_1 (value : number) {
        this.prop4_1 = value
    }

    [Symbol.toPrimitive] () {
        return '4'
    }
}





// const DOES_NOT_EXIST = 100000
//
// //------------------------------------------------------------------------------
// const DataType0VTable = {
//     prop0_0: 0,
//     prop0_1: 1,
//     prop0_2: 2,
//     prop0_3: 3,
//     prop0_4: 4,
//     prop1_0: DOES_NOT_EXIST,
//     prop1_1: DOES_NOT_EXIST,
//     prop2_0: DOES_NOT_EXIST,
//     prop2_1: DOES_NOT_EXIST,
//     prop3_0: DOES_NOT_EXIST,
//     prop3_1: DOES_NOT_EXIST,
//     prop4_0: DOES_NOT_EXIST,
//     prop4_1: DOES_NOT_EXIST,
// };
// const DataType0 = function () {
//     this.storage = [ 0, 0, 0, 0, 0 ]
// }
// DataType0.prototype = function () { return DataType0VTable }
// //------------------------------------------------------------------------------
// const DataType1VTable = {
//     prop0_0: 0,
//     prop0_1: 1,
//     prop0_2: 2,
//     prop0_3: 3,
//     prop0_4: 4,
//     prop1_0: 5,
//     prop1_1: 6,
//     prop2_0: DOES_NOT_EXIST,
//     prop2_1: DOES_NOT_EXIST,
//     prop3_0: DOES_NOT_EXIST,
//     prop3_1: DOES_NOT_EXIST,
//     prop4_0: DOES_NOT_EXIST,
//     prop4_1: DOES_NOT_EXIST,
// };
// const DataType1 = function () {
//     this.storage = [ 0, 0, 0, 0, 0, 0 ]
// }
// DataType1.prototype = function () { return DataType1VTable }
// //------------------------------------------------------------------------------
// const DataType2VTable = {
//     prop0_0: 0,
//     prop0_1: 1,
//     prop0_2: 2,
//     prop0_3: 3,
//     prop0_4: 4,
//     prop1_0: DOES_NOT_EXIST,
//     prop1_1: DOES_NOT_EXIST,
//     prop2_0: 5,
//     prop2_1: 6,
//     prop3_0: DOES_NOT_EXIST,
//     prop3_1: DOES_NOT_EXIST,
//     prop4_0: DOES_NOT_EXIST,
//     prop4_1: DOES_NOT_EXIST,
// };
// const DataType2 = function () {
//     this.storage = [ 0, 0, 0, 0, 0, 0 ]
// }
// DataType2.prototype = function () { return DataType2VTable }
// //------------------------------------------------------------------------------
// const DataType3VTable = {
//     prop0_0: 0,
//     prop0_1: 1,
//     prop0_2: 2,
//     prop0_3: 3,
//     prop0_4: 4,
//     prop1_0: DOES_NOT_EXIST,
//     prop1_1: DOES_NOT_EXIST,
//     prop2_0: DOES_NOT_EXIST,
//     prop2_1: DOES_NOT_EXIST,
//     prop3_0: 5,
//     prop3_1: 6,
//     prop4_0: DOES_NOT_EXIST,
//     prop4_1: DOES_NOT_EXIST,
// };
// const DataType3 = function () {
//     this.storage = [ 0, 0, 0, 0, 0, 0 ]
// }
// DataType3.prototype = function () { return DataType3VTable }
// //------------------------------------------------------------------------------
// const DataType4VTable = {
//     prop0_0: 0,
//     prop0_1: 1,
//     prop0_2: 2,
//     prop0_3: 3,
//     prop0_4: 4,
//     prop1_0: DOES_NOT_EXIST,
//     prop1_1: DOES_NOT_EXIST,
//     prop2_0: DOES_NOT_EXIST,
//     prop2_1: DOES_NOT_EXIST,
//     prop3_0: DOES_NOT_EXIST,
//     prop3_1: DOES_NOT_EXIST,
//     prop4_0: 5,
//     prop4_1: 6,
// };
// const DataType4 = function () {
//     this.storage = [ 0, 0, 0, 0, 0, 0 ]
// }
// DataType4.prototype = function () { return DataType4VTable }

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
    name: 'Instantiate monopoly',
    cycle () {
        return generate()
    }
})
//------------------------------------------------------------------------------
const access = BenchmarkC({
    // profile : true,
    name: 'Access monopoly',
    async setup () {
        return generate()
    },
    cycle (iteration, cycle, state) {
        for (let i = 0; i < size; i++) {
            const instance      = state[i]
            const vtableIndex   = String(instance)// + 0

            instance.set_prop0_0(instance.get_prop0_0() + 3)
            instance.set_prop0_1(instance.get_prop0_1() + 3)
            instance.set_prop0_2(instance.get_prop0_2() + 3)
            instance.set_prop0_3(instance.get_prop0_3() + 3)
            instance.set_prop0_4(instance.get_prop0_4() + 3)
        }
    }
})
const run = async () => {
    // await instantiate.measureTillMaxTime()
    await access.measureTillRelativeMoe()
}
run()
