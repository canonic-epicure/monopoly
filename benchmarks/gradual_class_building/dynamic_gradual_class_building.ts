import { Benchmark, BenchmarkC } from "../../src/benchmark/Benchmark.js"
import { AnyConstructor } from "../../src/class/Mixin.js"

/*

In this benchmark we "enhance" the base class with 2 types of mixin.

The 1st type of mixin uses plain JavaScript syntax and adds new methods/properties to the base class.

The 2nd type of mixin wraps new methods/properties with `eval`, to avoid the code shift to megamorphism.

Results are also compared to the plain JS version.

Extracted knowledge: When using mixins, one need to wrap the code for new methods/properties with `eval`.

*/


//------------------------------------------------------------------------------
/*

This mixin adds a property to the class. However, applying more than 4 times should switch code to megamorphic.

*/
const FieldMixinStringPropertyConst = <B extends AnyConstructor>(nameArg : string, idx : number, base : B) => {
    // idea is to convince `v8` that these values are "const" and it can optimize code based on them
    const name          = String(nameArg)
    const storageProp   = '$' + name

    // @ts-ignore
    const Class = class extends base {
        constructor () {
            super(...arguments)

            this[ storageProp ] = 0
        }

        get [ name ] () : number {
            return this[ storageProp ]
        }

        set [ name ] (value : number) {
            this[ storageProp ] = value
        }
    }

    return Class
}


//------------------------------------------------------------------------------
/*

This mixin adds a property to the class and wraps the methods with `eval` to "split the feedback vector"

*/
const FieldMixinStringPropertyEval = <B extends AnyConstructor>(nameArg : string, idx : number, base : B) => {
    const name          = String(nameArg)
    const storageProp   = '$' + name

    const Class = eval(`(class extends base {
        constructor () {
            super(...arguments)

            this[ '${storageProp}' ] = 0
        }
    })`)

    Object.defineProperty(Class.prototype, name, {
        get : eval(`(function () {
            return this[ '${storageProp}' ]
        })`),

        set : eval(`(function (value ) {
            return this[ '${storageProp}' ] = value
        })`)
    })

    return Class
}



//------------------------------------------------------------------------------
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
}


//------------------------------------------------------------------------------
class Base {}

class TestClassStringPropertyConst extends
    FieldMixinStringPropertyConst('field09', 9,
    FieldMixinStringPropertyConst('field08', 8,
    FieldMixinStringPropertyConst('field07', 7,
    FieldMixinStringPropertyConst('field06', 6,
    FieldMixinStringPropertyConst('field05', 5,
    FieldMixinStringPropertyConst('field04', 4,
    FieldMixinStringPropertyConst('field03', 3,
    FieldMixinStringPropertyConst('field02', 2,
    FieldMixinStringPropertyConst('field01', 1,
    FieldMixinStringPropertyConst('field00', 0,
        Base
    ))))))))))
{
}


//------------------------------------------------------------------------------
class TestClassStringPropertyEval extends
    FieldMixinStringPropertyEval('field09', 9,
    FieldMixinStringPropertyEval('field08', 8,
    FieldMixinStringPropertyEval('field07', 7,
    FieldMixinStringPropertyEval('field06', 6,
    FieldMixinStringPropertyEval('field05', 5,
    FieldMixinStringPropertyEval('field04', 4,
    FieldMixinStringPropertyEval('field03', 3,
    FieldMixinStringPropertyEval('field02', 2,
    FieldMixinStringPropertyEval('field01', 1,
    FieldMixinStringPropertyEval('field00', 0,
        Base
    ))))))))))
{
}


//------------------------------------------------------------------------------
const size = 30000


const instantiatePlain = Benchmark.new({
    name        : 'Instantiate plain JS',
    cycle () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new Plain()
    }
})

const instantiateConst = Benchmark.new({
    name        : 'Instantiate class with const properties',
    cycle () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new TestClassStringPropertyConst()
    }
})

const instantiateEval = Benchmark.new({
    name        : 'Instantiate class with eval properties',
    cycle () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new TestClassStringPropertyEval()
    }
})


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

const accessConst = Benchmark.new({
    name        : 'Access properties, created as const values',

    async setup () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new TestClassStringPropertyConst()

        return instances

    },

    cycle (iteration : number, cycle : number, state : TestClassStringPropertyConst[]) {
        for (let i = 0; i < size; i++) {
            const instance = state[ i ]

            // @ts-ignore
            instance.field00++
            // @ts-ignore
            instance.field01++
            // @ts-ignore
            instance.field02++
            // @ts-ignore
            instance.field03++
            // @ts-ignore
            instance.field04++
            // @ts-ignore
            instance.field05++
            // @ts-ignore
            instance.field06++
            // @ts-ignore
            instance.field07++
            // @ts-ignore
            instance.field08++
            // @ts-ignore
            instance.field09++
        }
    }
})


const accessEval = Benchmark.new({
    name        : 'Access properties, created with eval',

    async setup () {
        const instances = new Array(size)

        for (let i = 0; i < size; i++) instances[ i ] = new TestClassStringPropertyEval()

        return instances
    },

    cycle (iteration : number, cycle : number, state : TestClassStringPropertyEval[]) {
        for (let i = 0; i < size; i++) {
            const instance = state[ i ]

            // @ts-ignore
            instance.field00++
            // @ts-ignore
            instance.field01++
            // @ts-ignore
            instance.field02++
            // @ts-ignore
            instance.field03++
            // @ts-ignore
            instance.field04++
            // @ts-ignore
            instance.field05++
            // @ts-ignore
            instance.field06++
            // @ts-ignore
            instance.field07++
            // @ts-ignore
            instance.field08++
            // @ts-ignore
            instance.field09++
        }
    }
})

const run = async () => {
    await instantiatePlain.measureTillMaxTime()
    await instantiateConst.measureTillMaxTime()
    await instantiateEval.measureTillMaxTime()

    await accessPlain.measureTillMaxTime()
    await accessConst.measureTillMaxTime()
    await accessEval.measureTillMaxTime()
}

run()
