import { Benchmark, BenchmarkC } from "../../src/benchmark/Benchmark.js"
import { AnyConstructor } from "../../src/class/Mixin.js"

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


class DataType {
    prop1       : number

    prop2       : number
}


class Eq<V> {
    equal (v1 : V, v2 : V) : boolean {
        return !this.notEqual(v1, v2)
    }

    notEqual (v1 : V, v2 : V) : boolean {
        return !this.equal(v1, v2)
    }
}


class EqForDataType extends Eq<DataType> {
    equal (v1 : DataType, v2 : DataType) : boolean {
        return v1.prop1 === v2.prop1 && v1.prop2 === v2.prop2
    }
}
