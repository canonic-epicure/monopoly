import { BenchmarkC } from "../benchmark/Benchmark.js"

// @ts-ignore
const monopoly : () => ClassDecorator = x => x => x

class Monopoly {}

@monopoly()
export class Mixin0<V> extends Monopoly {
    prop0_0       : number  = 0
    prop0_1       : number  = 0

    prop0_g       : V       = undefined

    sum (arg : string) : number {
        return this.prop0_0 + this.prop0_1
    }

    static new<V> (props? : Partial<Mixin0<V>>) : Mixin0<V> {
        return
    }
}

const mixin0 = Mixin0.new<number>({ prop0_0 : 1 })

mixin0.sum('1')


@monopoly()
export class Mixin1<T, V extends Mixin0<T>> {
    prop1_0       : number  = 0
    prop1_1       : number  = 0
}


@monopoly()
export class Mixin2<T, V extends Mixin0<T>> extends Monopoly implements Mixin0<T>, Mixin1<T, V> {
    SUPER           : Mixin0<T> & Mixin1<T, V> = undefined

    // region for typecheck purposes only
    prop0_0       : number
    prop0_1       : number
    prop1_0       : number
    prop1_1       : number
    prop0_g       : T       = undefined

    // sum () : number {
    //     return this.prop0_0 + this.prop0_1
    // }
    // endregion

    prop2_0       : number  = 0
    prop2_1       : number  = 0

    sum () : number {
        const SUPER : Mixin0<T> & Mixin1<T, V> = undefined

        return SUPER.sum('1')
            + this.prop2_0 + this.prop2_1
            + this.prop1_0 + this.prop1_1

        return this.SUPER.sum('1')
            + this.prop2_0 + this.prop2_1
            + this.prop1_0 + this.prop1_1

        return super.sum()
            + this.prop2_0 + this.prop2_1
            + this.prop1_0 + this.prop1_1
    }
}
