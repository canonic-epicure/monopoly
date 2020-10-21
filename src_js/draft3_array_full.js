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
const DataType0 = function () {
    return [ DataType0VTable, 0, 0, 0, 0, 0 ]
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
const DataType1 = function () {
    return [ DataType1VTable, 0, 0, 0, 0, 0, 0 ]
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
const DataType2 = function () {
    return [ DataType2VTable, 0, 0, 0, 0, 0, 0 ]
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
const DataType3 = function () {
    return [ DataType3VTable, 0, 0, 0, 0, 0, 0 ]
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
const DataType4 = function () {
    return [ DataType4VTable, 0, 0, 0, 0, 0, 0 ]
}
// DataType4.prototype = function () { return DataType4VTable }
//------------------------------------------------------------------------------
const size = 30000;
const generate = () => {
    const instances = [];
    do {
        instances.push(DataType0());
        instances.push(DataType1());
        instances.push(DataType2());
        instances.push(DataType3());
        instances.push(DataType4());
        // instances.push([ DataType0VTable, 0, 0, 0, 0 ]);
        // instances.push([ DataType1VTable, 0, 0, 0, 0, 0, 0 ]);
        // instances.push([ DataType1VTable, 0, 0, 0, 0, 0, 0 ]);
        // instances.push([ DataType1VTable, 0, 0, 0, 0, 0, 0 ]);
        // instances.push([ DataType1VTable, 0, 0, 0, 0, 0, 0 ]);
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
