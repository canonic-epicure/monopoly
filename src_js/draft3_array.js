import { BenchmarkC } from "../src/benchmark/Benchmark.js";

const DOES_NOT_EXIST = 100000

//------------------------------------------------------------------------------
const DataType0VTable = {
    prop0_0: 0,
    prop0_1: 1,
    prop0_2: 2,
    prop0_3: 3,
    prop0_4: 4,
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
    this.storage = [ 0, 0, 0, 0, 0 ]
}
DataType0.prototype = function () { return DataType0VTable }
//------------------------------------------------------------------------------
const DataType1VTable = {
    prop0_0: 0,
    prop0_1: 1,
    prop0_2: 2,
    prop0_3: 3,
    prop0_4: 4,
    prop1_0: 5,
    prop1_1: 6,
    prop2_0: DOES_NOT_EXIST,
    prop2_1: DOES_NOT_EXIST,
    prop3_0: DOES_NOT_EXIST,
    prop3_1: DOES_NOT_EXIST,
    prop4_0: DOES_NOT_EXIST,
    prop4_1: DOES_NOT_EXIST,
};
const DataType1 = function () {
    this.storage = [ 0, 0, 0, 0, 0, false, '0' ]
}
DataType1.prototype = function () { return DataType1VTable }
//------------------------------------------------------------------------------
const DataType2VTable = {
    prop0_0: 0,
    prop0_1: 1,
    prop0_2: 2,
    prop0_3: 3,
    prop0_4: 4,
    prop1_0: DOES_NOT_EXIST,
    prop1_1: DOES_NOT_EXIST,
    prop2_0: 5,
    prop2_1: 6,
    prop3_0: DOES_NOT_EXIST,
    prop3_1: DOES_NOT_EXIST,
    prop4_0: DOES_NOT_EXIST,
    prop4_1: DOES_NOT_EXIST,
};
const DataType2 = function () {
    this.storage = [ 0, 0, 0, 0, 0, false, '0' ]
}
DataType2.prototype = function () { return DataType2VTable }
//------------------------------------------------------------------------------
const DataType3VTable = {
    prop0_0: 0,
    prop0_1: 1,
    prop0_2: 2,
    prop0_3: 3,
    prop0_4: 4,
    prop1_0: DOES_NOT_EXIST,
    prop1_1: DOES_NOT_EXIST,
    prop2_0: DOES_NOT_EXIST,
    prop2_1: DOES_NOT_EXIST,
    prop3_0: 5,
    prop3_1: 6,
    prop4_0: DOES_NOT_EXIST,
    prop4_1: DOES_NOT_EXIST,
};
const DataType3 = function () {
    this.storage = [ 0, 0, 0, 0, 0, false, '0' ]
}
DataType3.prototype = function () { return DataType3VTable }
//------------------------------------------------------------------------------
const DataType4VTable = {
    prop0_0: 0,
    prop0_1: 1,
    prop0_2: 2,
    prop0_3: 3,
    prop0_4: 4,
    prop1_0: DOES_NOT_EXIST,
    prop1_1: DOES_NOT_EXIST,
    prop2_0: DOES_NOT_EXIST,
    prop2_1: DOES_NOT_EXIST,
    prop3_0: DOES_NOT_EXIST,
    prop3_1: DOES_NOT_EXIST,
    prop4_0: 5,
    prop4_1: 6,
};
const DataType4 = function () {
    this.storage = [ 0, 0, 0, 0, 0, false, '0' ]
}
DataType4.prototype = function () { return DataType4VTable }
//------------------------------------------------------------------------------
const size = 30000;
const generate = () => {
    const instances = [];
    do {
        instances.push(new DataType0());
        instances.push(new DataType1());
        instances.push(new DataType2());
        instances.push(new DataType3());
        instances.push(new DataType4());
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
            const storage   = instance.storage;
            const vtable    = Object.getPrototypeOf(instance)();

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
