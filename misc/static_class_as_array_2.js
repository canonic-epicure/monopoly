import { Benchmark, BenchmarkC } from "../src/benchmark/Benchmark.js"

/*

This benchmarks exercises the idea of using array for properties storage.

Extracted knowledge: The best option is to use pre-filled array, instantiation time is even better
than the plain class instantiation. The access time is however 2x worse.

*/

class List {
    constructor () {
        this.storage = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    }
}

const total = (storage) => {
    return (
        storage[0]
        + storage[1]
        + storage[2]
        + storage[3]
        + storage[4]
        + storage[5]
        + storage[6]
        + storage[7]
        + storage[8]
        + storage[9]
    )
}


const Lists = [
    class extends List { constructor () { super(); this.storage[10] = 0 } },
    class extends List { constructor () { super(); this.storage[10] = 1 } },
    class extends List { constructor () { super(); this.storage[10] = 2 } },
    class extends List { constructor () { super(); this.storage[10] = 3 } },
    class extends List { constructor () { super(); this.storage[10] = 4 } },
    class extends List { constructor () { super(); this.storage[10] = 5 } },
]
const listsMono = Lists.map( () => new Lists[0] )
const listsPoly = Lists.map( (_, i) => new Lists[i % 4] )
const listsMega = Lists.map( N => new N )

let res

//------------------------------------------------------------------------------
const size = 30000

//------------------------------------------------------------------------------
const accessListsMono = BenchmarkC({
    name        : 'Access lists mono',
    cycle (iteration, cycle) {
        for (let i = 0; i < size; i++) {
            listsMono.reduce( ( s, o ) => s + total(o.storage), 0 )
        }
    }
})


//------------------------------------------------------------------------------
const accessListsPoly = BenchmarkC({
    name        : 'Access lists poly',
    cycle (iteration, cycle) {
        for (let i = 0; i < size; i++) {
            listsPoly.reduce( ( s, o ) => s + total(o.storage), 0 )
        }
    }
})

//------------------------------------------------------------------------------
const accessListsMega = BenchmarkC({
    name        : 'Access lists mega',
    cycle (iteration, cycle) {
        for (let i = 0; i < size; i++) {
            listsMega.reduce( ( s, o ) => s + total(o.storage), 0 )
        }
    }
})


//------------------------------------------------------------------------------
const run = async () => {
    await accessListsMono.measureTillMaxTime()
    await accessListsPoly.measureTillMaxTime()
    await accessListsMega.measureTillMaxTime()
}

run()
