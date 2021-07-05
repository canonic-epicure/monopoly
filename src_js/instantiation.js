import { BenchmarkC } from "../src/benchmark/Benchmark.js";

const object = {}

class DataType0 {

    constructor () {
        this.prop00      = object
        this.prop01      = 0
        this.prop02      = '0'
        this.prop03      = false
        this.prop04      = true
        this.prop05      = object
        this.prop06      = 0
        this.prop07      = 'true'
        this.prop08      = false
        this.prop09      = 0
        this.prop10      = 0
        this.prop11      = 0
        this.prop12      = 0
        this.prop13      = 0
        this.prop14      = 0
        this.prop15      = 0
    }
}

//------------------------------------------------------------------------------
const size = 30000;

const generateObject = () => {
    // let ref
    //
    // for (let i = 0; i < size; i++) ref = new DataType0()

    const instances = [];
    do {
        instances.push(new DataType0());
    } while (instances.length < size);
    return instances;
};

const instantiateObject = BenchmarkC({
    name: 'Instantiate object',
    cycle() {
        return generateObject();
    }
});

//------------------------------------------------------------------------------
const generateArray = () => {
    // let ref
    //
    // for (let i = 0; i < size; i++)
    //     ref = [
    //         object,
    //         0,
    //         '0',
    //         false,
    //         true,
    //         object,
    //         0,
    //         'true',
    //         false,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //     ]
    const instances = [];
    do {
        instances.push([
            object,
            0,
            '0',
            false,
            true,
            object,
            0,
            'true',
            false,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]);
    } while (instances.length < size);
    return instances;
};

const instantiateArray = BenchmarkC({
    name: 'Instantiate array',
    cycle() {
        return generateArray();
    }
});


const run = async () => {
    await instantiateObject.measureTillRelativeMoe()
    await instantiateArray.measureTillRelativeMoe()
};

run();
