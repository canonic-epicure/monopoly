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
    prop1_1_w: (host, value) => host.prop1_1 = value,
    prop1_0: (host) => host.prop1_0,
    prop1_1: (host) => host.prop1_1,
    prop2_0_w: (host, value) => host.prop2_0 = value,
    prop2_1_w: (host, value) => host.prop2_1 = value,
    prop2_0: (host) => host.prop2_0,
    prop2_1: (host) => host.prop2_1,
    prop3_0_w: (host, value) => host.prop3_0 = value,
    prop3_1_w: (host, value) => host.prop3_1 = value,
    prop3_0: (host) => host.prop3_0,
    prop3_1: (host) => host.prop3_1,
    prop4_0_w: (host, value) => host.prop4_0 = value,
    prop4_1_w: (host, value) => host.prop4_1 = value,
    prop4_0: (host) => host.prop4_0,
    prop4_1: (host) => host.prop4_1,
};
class DataType0 {
    constructor() {
        this.prop0_0 = 0;
        this.prop0_1 = 0;
        this.prop0_2 = 0;
        this.prop0_3 = 0;
        this.prop0_4 = 0;
    }
    get vtable() {
        return DataType0VTable;
    }
}
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
    prop2_0_w: (host, value) => host.prop2_0 = value,
    prop2_1_w: (host, value) => host.prop2_1 = value,
    prop2_0: (host) => host.prop2_0,
    prop2_1: (host) => host.prop2_1,
    prop3_0_w: (host, value) => host.prop3_0 = value,
    prop3_1_w: (host, value) => host.prop3_1 = value,
    prop3_0: (host) => host.prop3_0,
    prop3_1: (host) => host.prop3_1,
    prop4_0_w: (host, value) => host.prop4_0 = value,
    prop4_1_w: (host, value) => host.prop4_1 = value,
    prop4_0: (host) => host.prop4_0,
    prop4_1: (host) => host.prop4_1,
};
class DataType1 extends DataType0 {
    constructor() {
        super(...arguments);
        this.prop1_0 = 0;
        this.prop1_1 = 0;
    }
    get vtable() {
        return DataType1VTable;
    }
}
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
    prop1_0_w: (host, value) => host.prop1_0 = value,
    prop1_1_w: (host, value) => host.prop1_1 = value,
    prop1_0: (host) => host.prop1_0,
    prop1_1: (host) => host.prop1_1,
    prop2_0_w: (host, value) => host.prop2_0 = value,
    prop2_1_w: (host, value) => host.prop2_1 = value,
    prop2_0: (host) => host.prop2_0,
    prop2_1: (host) => host.prop2_1,
    prop3_0_w: (host, value) => host.prop3_0 = value,
    prop3_1_w: (host, value) => host.prop3_1 = value,
    prop3_0: (host) => host.prop3_0,
    prop3_1: (host) => host.prop3_1,
    prop4_0_w: (host, value) => host.prop4_0 = value,
    prop4_1_w: (host, value) => host.prop4_1 = value,
    prop4_0: (host) => host.prop4_0,
    prop4_1: (host) => host.prop4_1,
};
class DataType2 extends DataType0 {
    constructor() {
        super(...arguments);
        this.prop2_0 = 0;
        this.prop2_1 = 0;
    }
    get vtable() {
        return DataType2VTable;
    }
}
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
    prop1_0_w: (host, value) => host.prop1_0 = value,
    prop1_1_w: (host, value) => host.prop1_1 = value,
    prop1_0: (host) => host.prop1_0,
    prop1_1: (host) => host.prop1_1,
    prop2_0_w: (host, value) => host.prop2_0 = value,
    prop2_1_w: (host, value) => host.prop2_1 = value,
    prop2_0: (host) => host.prop2_0,
    prop2_1: (host) => host.prop2_1,
    prop3_0_w: (host, value) => host.prop3_0 = value,
    prop3_1_w: (host, value) => host.prop3_1 = value,
    prop3_0: (host) => host.prop3_0,
    prop3_1: (host) => host.prop3_1,
    prop4_0_w: (host, value) => host.prop4_0 = value,
    prop4_1_w: (host, value) => host.prop4_1 = value,
    prop4_0: (host) => host.prop4_0,
    prop4_1: (host) => host.prop4_1,
};
class DataType3 extends DataType0 {
    constructor() {
        super(...arguments);
        this.prop3_0 = 0;
        this.prop3_1 = 0;
    }
    get vtable() {
        return DataType3VTable;
    }
}
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
    prop1_0_w: (host, value) => host.prop1_0 = value,
    prop1_1_w: (host, value) => host.prop1_1 = value,
    prop1_0: (host) => host.prop1_0,
    prop1_1: (host) => host.prop1_1,
    prop2_0_w: (host, value) => host.prop2_0 = value,
    prop2_1_w: (host, value) => host.prop2_1 = value,
    prop2_0: (host) => host.prop2_0,
    prop2_1: (host) => host.prop2_1,
    prop3_0_w: (host, value) => host.prop3_0 = value,
    prop3_1_w: (host, value) => host.prop3_1 = value,
    prop3_0: (host) => host.prop3_0,
    prop3_1: (host) => host.prop3_1,
    prop4_0_w: (host, value) => host.prop4_0 = value,
    prop4_1_w: (host, value) => host.prop4_1 = value,
    prop4_0: (host) => host.prop4_0,
    prop4_1: (host) => host.prop4_1,
};
class DataType4 extends DataType0 {
    constructor() {
        super(...arguments);
        this.prop4_0 = 0;
        this.prop4_1 = 0;
    }
    get vtable() {
        return DataType4VTable;
    }
}
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
    name: 'Access monopoly',
    async setup() {
        return generate();
    },
    cycle(iteration, cycle, state) {
        for (let i = 0; i < size; i++) {
            const instance = state[i];
            const vtable = instance.vtable;
            vtable.prop0_0_w(instance, vtable.prop0_0(instance) + 3);
            vtable.prop0_1_w(instance, vtable.prop0_1(instance) + 3);
            vtable.prop0_2_w(instance, vtable.prop0_2(instance) + 3);
            vtable.prop0_3_w(instance, vtable.prop0_3(instance) + 3);
            vtable.prop0_4_w(instance, vtable.prop0_4(instance) + 3);
        }
    }
});
const run = async () => {
    // await instantiate.measureTillMaxTime()
    await access.measureTillMaxTime();
};
run();
