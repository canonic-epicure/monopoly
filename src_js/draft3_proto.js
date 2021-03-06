import { BenchmarkC } from "../src/benchmark/Benchmark.js";
//------------------------------------------------------------------------------
const DataType0VTable = {
    prop0_0_w: (host, value) => host.prop0_0 = value,
    prop0_1_w: (host, value) => host.prop0_1 = value,
    prop0_2_w: (host, value) => host.prop0_2 = value,
    prop0_3_w: (host, value) => host.prop0_3 = value,
    prop0_4_w: (host, value) => host.prop0_4 = value,
    prop0_0: (host) => host.prop0_0,
    prop0_1: (host) => host.prop0_1,
    prop0_2: (host) => host.prop0_2,
    prop0_3: (host) => host.prop0_3,
    prop0_4: (host) => host.prop0_4,
    prop1_0_w: (host, value) => { throw "oops"; },
    prop1_1_w: (host, value) => { throw "oops"; },
    prop1_0: (host) => { throw "oops"; },
    prop1_1: (host) => { throw "oops"; },
    prop2_0_w: (host, value) => { throw "oops"; },
    prop2_1_w: (host, value) => { throw "oops"; },
    prop2_0: (host) => { throw "oops"; },
    prop2_1: (host) => { throw "oops"; },
    prop3_0_w: (host, value) => { throw "oops"; },
    prop3_1_w: (host, value) => { throw "oops"; },
    prop3_0: (host) => { throw "oops"; },
    prop3_1: (host) => { throw "oops"; },
    prop4_0_w: (host, value) => { throw "oops"; },
    prop4_1_w: (host, value) => { throw "oops"; },
    prop4_0: (host) => { throw "oops"; },
    prop4_1: (host) => { throw "oops"; },
};
const DataType0 = function () {
    this.prop0_0 = 0;
    this.prop0_1 = 0;
    this.prop0_2 = 0;
    this.prop0_3 = 0;
    this.prop0_4 = 0;
}
DataType0.prototype = function () { return DataType0VTable }
DataType0.prototype[Symbol.toPrimitive] = function () { return 0 }
//------------------------------------------------------------------------------
const DataType1VTable = {
    prop0_0_w: (host, value) => host.prop0_0 = value,
    prop0_1_w: (host, value) => host.prop0_1 = value,
    prop0_2_w: (host, value) => host.prop0_2 = value,
    prop0_3_w: (host, value) => host.prop0_3 = value,
    prop0_4_w: (host, value) => host.prop0_4 = value,
    prop0_0: (host) => host.prop0_0,
    prop0_1: (host) => host.prop0_1,
    prop0_2: (host) => host.prop0_2,
    prop0_3: (host) => host.prop0_3,
    prop0_4: (host) => host.prop0_4,
    prop1_0_w: (host, value) => host.prop1_0 = value,
    prop1_1_w: (host, value) => host.prop1_1 = value,
    prop1_0: (host) => host.prop1_0,
    prop1_1: (host) => host.prop1_1,
    prop2_0_w: (host, value) => { throw "oops"; },
    prop2_1_w: (host, value) => { throw "oops"; },
    prop2_0: (host) => { throw "oops"; },
    prop2_1: (host) => { throw "oops"; },
    prop3_0_w: (host, value) => { throw "oops"; },
    prop3_1_w: (host, value) => { throw "oops"; },
    prop3_0: (host) => { throw "oops"; },
    prop3_1: (host) => { throw "oops"; },
    prop4_0_w: (host, value) => { throw "oops"; },
    prop4_1_w: (host, value) => { throw "oops"; },
    prop4_0: (host) => { throw "oops"; },
    prop4_1: (host) => { throw "oops"; },
};
const DataType1 = function () {
    this.prop0_0 = 0;
    this.prop0_1 = 0;
    this.prop0_2 = 0;
    this.prop0_3 = 0;
    this.prop0_4 = 0;

    this.prop1_0 = false;
    this.prop1_1 = '0';
}
DataType1.prototype = function () { return DataType1VTable }
DataType1.prototype[Symbol.toPrimitive] = function () { return 1 }
//------------------------------------------------------------------------------
const DataType2VTable = {
    prop0_0_w: (host, value) => host.prop0_0 = value,
    prop0_1_w: (host, value) => host.prop0_1 = value,
    prop0_2_w: (host, value) => host.prop0_2 = value,
    prop0_3_w: (host, value) => host.prop0_3 = value,
    prop0_4_w: (host, value) => host.prop0_4 = value,
    prop0_0: (host) => host.prop0_0,
    prop0_1: (host) => host.prop0_1,
    prop0_2: (host) => host.prop0_2,
    prop0_3: (host) => host.prop0_3,
    prop0_4: (host) => host.prop0_4,
    prop1_0_w: (host, value) => { throw "oops"; },
    prop1_1_w: (host, value) => { throw "oops"; },
    prop1_0: (host) => { throw "oops"; },
    prop1_1: (host) => { throw "oops"; },
    prop2_0_w: (host, value) => host.prop2_0 = value,
    prop2_1_w: (host, value) => host.prop2_1 = value,
    prop2_0: (host) => host.prop2_0,
    prop2_1: (host) => host.prop2_1,
    prop3_0_w: (host, value) => { throw "oops"; },
    prop3_1_w: (host, value) => { throw "oops"; },
    prop3_0: (host) => { throw "oops"; },
    prop3_1: (host) => { throw "oops"; },
    prop4_0_w: (host, value) => { throw "oops"; },
    prop4_1_w: (host, value) => { throw "oops"; },
    prop4_0: (host) => { throw "oops"; },
    prop4_1: (host) => { throw "oops"; },
};
const DataType2 = function () {
    this.prop0_0 = 0;
    this.prop0_1 = 0;
    this.prop0_2 = 0;
    this.prop0_3 = 0;
    this.prop0_4 = 0;

    this.prop2_0 = '0';
    this.prop2_1 = false;
}
DataType2.prototype = function () { return DataType2VTable }
DataType2.prototype[Symbol.toPrimitive] = function () { return 2 }
//------------------------------------------------------------------------------
const DataType3VTable = {
    prop0_0_w: (host, value) => host.prop0_0 = value,
    prop0_1_w: (host, value) => host.prop0_1 = value,
    prop0_2_w: (host, value) => host.prop0_2 = value,
    prop0_3_w: (host, value) => host.prop0_3 = value,
    prop0_4_w: (host, value) => host.prop0_4 = value,
    prop0_0: (host) => host.prop0_0,
    prop0_1: (host) => host.prop0_1,
    prop0_2: (host) => host.prop0_2,
    prop0_3: (host) => host.prop0_3,
    prop0_4: (host) => host.prop0_4,
    prop1_0_w: (host, value) => { throw "oops"; },
    prop1_1_w: (host, value) => { throw "oops"; },
    prop1_0: (host) => { throw "oops"; },
    prop1_1: (host) => { throw "oops"; },
    prop2_0_w: (host, value) => { throw "oops"; },
    prop2_1_w: (host, value) => { throw "oops"; },
    prop2_0: (host) => { throw "oops"; },
    prop2_1: (host) => { throw "oops"; },
    prop3_0_w: (host, value) => host.prop3_0 = value,
    prop3_1_w: (host, value) => host.prop3_1 = value,
    prop3_0: (host) => host.prop3_0,
    prop3_1: (host) => host.prop3_1,
    prop4_0_w: (host, value) => { throw "oops"; },
    prop4_1_w: (host, value) => { throw "oops"; },
    prop4_0: (host) => { throw "oops"; },
    prop4_1: (host) => { throw "oops"; },
};
const DataType3 = function () {
    this.prop0_0 = 0;
    this.prop0_1 = 0;
    this.prop0_2 = 0;
    this.prop0_3 = 0;
    this.prop0_4 = 0;

    this.prop3_0 = DataType2VTable;
    this.prop3_1 = '0';
}
DataType3.prototype = function () { return DataType3VTable }
DataType3.prototype[Symbol.toPrimitive] = function () { return 3 }
//------------------------------------------------------------------------------
const DataType4VTable = {
    prop0_0_w: (host, value) => host.prop0_0 = value,
    prop0_1_w: (host, value) => host.prop0_1 = value,
    prop0_2_w: (host, value) => host.prop0_2 = value,
    prop0_3_w: (host, value) => host.prop0_3 = value,
    prop0_4_w: (host, value) => host.prop0_4 = value,
    prop0_0: (host) => host.prop0_0,
    prop0_1: (host) => host.prop0_1,
    prop0_2: (host) => host.prop0_2,
    prop0_3: (host) => host.prop0_3,
    prop0_4: (host) => host.prop0_4,
    prop1_0_w: (host, value) => { throw "oops"; },
    prop1_1_w: (host, value) => { throw "oops"; },
    prop1_0: (host) => { throw "oops"; },
    prop1_1: (host) => { throw "oops"; },
    prop2_0_w: (host, value) => { throw "oops"; },
    prop2_1_w: (host, value) => { throw "oops"; },
    prop2_0: (host) => { throw "oops"; },
    prop2_1: (host) => { throw "oops"; },
    prop3_0_w: (host, value) => { throw "oops"; },
    prop3_1_w: (host, value) => { throw "oops"; },
    prop3_0: (host) => { throw "oops"; },
    prop3_1: (host) => { throw "oops"; },
    prop4_0_w: (host, value) => host.prop4_0 = value,
    prop4_1_w: (host, value) => host.prop4_1 = value,
    prop4_0: (host) => host.prop4_0,
    prop4_1: (host) => host.prop4_1,
};
const DataType4 = function () {
    this.prop0_0 = 0;
    this.prop0_1 = 0;
    this.prop0_2 = 0;
    this.prop0_3 = 0;
    this.prop0_4 = 0;

    this.prop4_0 = '0';
    this.prop4_1 = false;
}
DataType4.prototype = function () { return DataType4VTable }
DataType4.prototype[Symbol.toPrimitive] = function () { return 4 }

const vtables   = [
    DataType0VTable,
    DataType1VTable,
    DataType2VTable,
    DataType3VTable,
    DataType4VTable
]

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
            const instance = state[i];
            const vtable = Object.getPrototypeOf(instance)();
            // const vtable = vtables[ Number(instance) ]
            vtable.prop0_0_w(instance, vtable.prop0_0(instance) + 3);
            vtable.prop0_1_w(instance, vtable.prop0_1(instance) + 3);
            vtable.prop0_2_w(instance, vtable.prop0_2(instance) + 3);
            vtable.prop0_3_w(instance, vtable.prop0_3(instance) + 3);
            vtable.prop0_4_w(instance, vtable.prop0_4(instance) + 3);
        }
    }
});
const run = async () => {
    await instantiate.measureTillRelativeMoe()
    await access.measureTillRelativeMoe();
};
run();
