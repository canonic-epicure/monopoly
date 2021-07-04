import { BenchmarkC } from "../src/benchmark/Benchmark.js";

const DOES_NOT_EXIST = 100000

//------------------------------------------------------------------------------
const DataType0VTable = {
    prop0_0: 1,
    prop0_1: 2,
    prop0_2: 3,
    prop0_3: 4,
    prop0_4: 5,
    prop1_0: DOES_NOT_EXIST,
    prop1_1: DOES_NOT_EXIST,
    prop2_0: DOES_NOT_EXIST,
    prop2_1: DOES_NOT_EXIST,
    prop3_0: DOES_NOT_EXIST,
    prop3_1: DOES_NOT_EXIST,
    prop4_0: DOES_NOT_EXIST,
    prop4_1: DOES_NOT_EXIST,
};
class DataType0 extends Array {
    constructor () {
        super()

        this[ 0 ] = DataType0VTable
        this[ 1 ] = 0
        this[ 2 ] = 0
        this[ 3 ] = 0
        this[ 4 ] = 0
        this[ 5 ] = 0
    }
    // return { 0 : DataType0VTable, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0 }
}
// DataType0.prototype = function () { return DataType0VTable }
//------------------------------------------------------------------------------
const DataType1VTable = {
    prop0_0: 1,
    prop0_1: 2,
    prop0_2: 3,
    prop0_3: 4,
    prop0_4: 5,
    prop1_0: 6,
    prop1_1: 7,
    prop2_0: DOES_NOT_EXIST,
    prop2_1: DOES_NOT_EXIST,
    prop3_0: DOES_NOT_EXIST,
    prop3_1: DOES_NOT_EXIST,
    prop4_0: DOES_NOT_EXIST,
    prop4_1: DOES_NOT_EXIST,
};
class DataType1 extends Array {
    constructor () {
        super()

        this[ 0 ] = DataType1VTable
        this[ 1 ] = 0
        this[ 2 ] = 0
        this[ 3 ] = 0
        this[ 4 ] = 0
        this[ 5 ] = 0
    }
    // return { 0 : DataType1VTable, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0 }
}
// DataType1.prototype = function () { return DataType1VTable }
//------------------------------------------------------------------------------
const DataType2VTable = {
    prop0_0: 1,
    prop0_1: 2,
    prop0_2: 3,
    prop0_3: 4,
    prop0_4: 5,
    prop1_0: DOES_NOT_EXIST,
    prop1_1: DOES_NOT_EXIST,
    prop2_0: 6,
    prop2_1: 7,
    prop3_0: DOES_NOT_EXIST,
    prop3_1: DOES_NOT_EXIST,
    prop4_0: DOES_NOT_EXIST,
    prop4_1: DOES_NOT_EXIST,
};
class DataType2 extends Array {
    constructor () {
        super()

        this[ 0 ] = DataType2VTable
        this[ 1 ] = 0
        this[ 2 ] = 0
        this[ 3 ] = 0
        this[ 4 ] = 0
        this[ 5 ] = 0
    }
    // return { 0 : DataType2VTable, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0 }
}
// DataType2.prototype = function () { return DataType2VTable }
//------------------------------------------------------------------------------
const DataType3VTable = {
    prop0_0: 1,
    prop0_1: 2,
    prop0_2: 3,
    prop0_3: 4,
    prop0_4: 5,
    prop1_0: DOES_NOT_EXIST,
    prop1_1: DOES_NOT_EXIST,
    prop2_0: DOES_NOT_EXIST,
    prop2_1: DOES_NOT_EXIST,
    prop3_0: 6,
    prop3_1: 7,
    prop4_0: DOES_NOT_EXIST,
    prop4_1: DOES_NOT_EXIST,
};
class DataType3 extends Array {
    constructor () {
        super()

        this[ 0 ] = DataType3VTable
        this[ 1 ] = 0
        this[ 2 ] = 0
        this[ 3 ] = 0
        this[ 4 ] = 0
        this[ 5 ] = 0
    }
    // return { 0 : DataType3VTable, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0 }
}
// DataType3.prototype = function () { return DataType3VTable }
//------------------------------------------------------------------------------
const DataType4VTable = {
    prop0_0: 1,
    prop0_1: 2,
    prop0_2: 3,
    prop0_3: 4,
    prop0_4: 5,
    prop1_0: DOES_NOT_EXIST,
    prop1_1: DOES_NOT_EXIST,
    prop2_0: DOES_NOT_EXIST,
    prop2_1: DOES_NOT_EXIST,
    prop3_0: DOES_NOT_EXIST,
    prop3_1: DOES_NOT_EXIST,
    prop4_0: 6,
    prop4_1: 7,
};
class DataType4 extends Array {
    constructor () {
        super()

        this[ 0 ] = DataType4VTable
        this[ 1 ] = 0
        this[ 2 ] = 0
        this[ 3 ] = 0
        this[ 4 ] = 0
        this[ 5 ] = 0
    }
    // return { 0 : DataType4VTable, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0 }
}
// DataType4.prototype = function () { return DataType4VTable }
//------------------------------------------------------------------------------
const size = 30000;
const generate = () => {
    const instances = [];
    do {
        // instances.push(new DataType0());
        // instances.push(new DataType1());
        // instances.push(new DataType2());
        // instances.push(new DataType3());
        // instances.push(new DataType4());
        instances.push([ DataType0VTable, 0, 0, 0, 0, 0]);
        instances.push([ DataType1VTable, 0, 0, 0, 0, 0, 0 ]);
        instances.push([ DataType1VTable, 0, 0, 0, 0, 0, 0 ]);
        instances.push([ DataType1VTable, 0, 0, 0, 0, 0, 0 ]);
        instances.push([ DataType1VTable, 0, 0, 0, 0, 0, 0 ]);
    } while (instances.length < size);
    return instances;
};
const instantiate = BenchmarkC({
    name: 'Instantiate monopoly',
    cycle() {
        return generate();
    }
});
//------------------------------------------------------------------------------
const access = BenchmarkC({
    // profile : true,
    name: 'Access monopoly',
    async setup() {
        return generate();
    },
    cycle(iteration, cycle, state) {
        for (let i = 0; i < size; i++) {
            const instance  = state[i];
            const storage   = instance;
            const vtable    = instance[0];

            storage[ vtable.prop0_0 ] = storage[ vtable.prop0_0 ] + 3
            storage[ vtable.prop0_1 ] = storage[ vtable.prop0_1 ] + 3
            storage[ vtable.prop0_2 ] = storage[ vtable.prop0_2 ] + 3
            storage[ vtable.prop0_3 ] = storage[ vtable.prop0_3 ] + 3
            storage[ vtable.prop0_4 ] = storage[ vtable.prop0_4 ] + 3
        }
    }
});
const run = async () => {
    await instantiate.measureTillMaxTime()
    await access.measureTillMaxTime();
};
run();
