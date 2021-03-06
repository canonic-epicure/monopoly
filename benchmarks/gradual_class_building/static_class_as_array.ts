import { Benchmark, BenchmarkC } from "../../src/benchmark/Benchmark.js"

/*

This benchmarks exercises the idea of using array for properties storage.

Extracted knowledge: The best option is to use pre-filled array, instantiation time is even better
than the plain class instantiation. The access time is however 2x worse.

*/

class Plain {
    $field00     : number    = 0
    get field00 () { return this.$field00 }
    set field00 (value) { this.$field00 = value}


    $field01     : number    = 0
    get field01 () { return this.$field01 }
    set field01 (value) { this.$field01 = value}


    $field02     : number    = 0
    get field02 () { return this.$field02 }
    set field02 (value) { this.$field02 = value}


    $field03     : number    = 0
    get field03 () { return this.$field03 }
    set field03 (value) { this.$field03 = value}


    $field04     : number    = 0
    get field04 () { return this.$field04 }
    set field04 (value) { this.$field04 = value}


    $field05     : number    = 0
    get field05 () { return this.$field05 }
    set field05 (value) { this.$field05 = value}


    $field06     : number    = 0
    get field06 () { return this.$field06 }
    set field06 (value) { this.$field06 = value}


    $field07     : number    = 0
    get field07 () { return this.$field07 }
    set field07 (value) { this.$field07 = value}


    $field08     : number    = 0
    get field08 () { return this.$field08 }
    set field08 (value) { this.$field08 = value}


    $field09     : number    = 0
    get field09 () { return this.$field09 }
    set field09 (value) { this.$field09 = value}


    abc     : any    = abc
    // get field09 () { return this.$field09 }
    // set field09 (value) { this.$field09 = value}

}

//------------------------------------------------------------------------------
class ClassAsArray extends Array {

    constructor () {
        super(10)

        this[ 0 ] = 0
        this[ 1 ] = 0
        this[ 2 ] = 0
        this[ 3 ] = 0
        this[ 4 ] = 0
        this[ 5 ] = 0
        this[ 6 ] = 0
        this[ 7 ] = 0
        this[ 8 ] = 0
        this[ 9 ] = 0
    }


    get field00 () { return this[0] }
    set field00 (value) { this[0] = value}


    get field01 () { return this[1] }
    set field01 (value) { this[1] = value}


    get field02 () { return this[2] }
    set field02 (value) { this[2] = value}


    get field03 () { return this[3] }
    set field03 (value) { this[3] = value}


    get field04 () { return this[4] }
    set field04 (value) { this[4] = value}


    get field05 () { return this[5] }
    set field05 (value) { this[5] = value}


    get field06 () { return this[6] }
    set field06 (value) { this[6] = value}


    get field07 () { return this[7] }
    set field07 (value) { this[7] = value}


    get field08 () { return this[8] }
    set field08 (value) { this[8] = value}


    get field09 () { return this[9] }
    set field09 (value) { this[9] = value}
}


//------------------------------------------------------------------------------
const abc = { abc : 11 }

class ClassHasArray {

    storage     : number[]      = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null ]
    // storage     : number[]      = new Array(10)
    // storage     : number[]      = []

    constructor () {
        const storage = this.storage

        storage[ 10 ] = abc

        // storage[ 0 ] = 0
        // storage[ 1 ] = 0
        // storage[ 2 ] = 0
        // storage[ 3 ] = 0
        // storage[ 4 ] = 0
        // storage[ 5 ] = 0
        // storage[ 6 ] = 0
        // storage[ 7 ] = 0
        // storage[ 8 ] = 0
        // storage[ 9 ] = 0
    }


    get field00 () { return this.storage[0] }
    set field00 (value) { this.storage[0] = value}


    get field01 () { return this.storage[1] }
    set field01 (value) { this.storage[1] = value}


    get field02 () { return this.storage[2] }
    set field02 (value) { this.storage[2] = value}


    get field03 () { return this.storage[3] }
    set field03 (value) { this.storage[3] = value}


    get field04 () { return this.storage[4] }
    set field04 (value) { this.storage[4] = value}


    get field05 () { return this.storage[5] }
    set field05 (value) { this.storage[5] = value}


    get field06 () { return this.storage[6] }
    set field06 (value) { this.storage[6] = value}


    get field07 () { return this.storage[7] }
    set field07 (value) { this.storage[7] = value}


    get field08 () { return this.storage[8] }
    set field08 (value) { this.storage[8] = value}


    get field09 () { return this.storage[9] }
    set field09 (value) { this.storage[9] = value}
}



//------------------------------------------------------------------------------
const accessPlain = BenchmarkC<Plain[]>({
    name        : 'Access plain JS',

    async setup () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new Plain()

        return instances
    },

    cycle (iteration : number, cycle : number, state : Plain[]) {
        for (let i = 0; i < size; i++) {
            const instance = state[ i ]

            instance.field00++
            instance.field01++
            instance.field02++
            instance.field03++
            instance.field04++
            instance.field05++
            instance.field06++
            instance.field07++
            instance.field08++
            instance.field09++
        }
    }
})


//------------------------------------------------------------------------------
const size = 30000


const accessArray = BenchmarkC<ClassAsArray[]>({
    name        : 'Access class as array',

    async setup () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new ClassAsArray()

        return instances
    },

    cycle (iteration : number, cycle : number, state : ClassAsArray[]) {
        for (let i = 0; i < size; i++) {
            const instance = state[ i ]

            instance.field00++
            instance.field01++
            instance.field02++
            instance.field03++
            instance.field04++
            instance.field05++
            instance.field06++
            instance.field07++
            instance.field08++
            instance.field09++
        }
    }
})


//------------------------------------------------------------------------------
const accessHasArray = BenchmarkC<ClassHasArray[]>({
    name        : 'Access class has array',

    async setup () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new ClassHasArray()

        return instances
    },

    cycle (iteration : number, cycle : number, state : ClassHasArray[]) {
        for (let i = 0; i < size; i++) {
            const instance = state[ i ]

            instance.field00++
            instance.field01++
            instance.field02++
            instance.field03++
            instance.field04++
            instance.field05++
            instance.field06++
            instance.field07++
            instance.field08++
            instance.field09++
        }
    }
})


//------------------------------------------------------------------------------
const instantiatePlain = Benchmark.new({
    name        : 'Instantiate plain class',
    cycle () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new Plain()
    }
})

const instantiateClassAsArray = Benchmark.new({
    name        : 'Instantiate class as array',
    cycle () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new ClassAsArray()
    }
})

const instantiateClassHasArray = Benchmark.new({
    name        : 'Instantiate class with array as storage',
    cycle () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new ClassHasArray()
    }
})

//------------------------------------------------------------------------------
const run = async () => {
    await instantiatePlain.measureTillMaxTime()
    // await instantiateClassAsArray.measureTillMaxTime()
    await instantiateClassHasArray.measureTillMaxTime()

    // await accessPlain.measureTillMaxTime()
    // await accessArray.measureTillMaxTime()
    // await accessHasArray.measureTillMaxTime()
}

run()
