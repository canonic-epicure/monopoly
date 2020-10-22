"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Benchmark_js_1 = require("../src/benchmark/Benchmark.js");
var FieldMixin = function (nameArg, idx, base) {
    var name = String(nameArg);
    var storageProp = '$' + name;
    var IDX = idx;
    var Class = eval("(class extends base {\n        constructor () {\n            super(...arguments)\n\n            this[ '" + storageProp + "' ] = 0\n        }\n    })");
    Object.defineProperty(Class.prototype, name, {
        get: eval("(function () {\n            return this[ '" + storageProp + "' ]\n        })"),
        set: eval("(function (value ) {\n            return this[ '" + storageProp + "' ] = value\n        })")
    });
    return Class;
};
var Test1 = /** @class */ (function () {
    function Test1() {
        this.$field00 = 0;
        this.$field01 = 0;
        this.$field02 = 0;
        this.$field03 = 0;
        this.$field04 = 0;
        this.$field05 = 0;
        this.$field06 = 0;
        this.$field07 = 0;
        this.$field08 = 0;
        this.$field09 = 0;
    }
    Object.defineProperty(Test1.prototype, "field00", {
        get: function () { return this.$field00; },
        set: function (value) { this.$field00 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field01", {
        get: function () { return this.$field01; },
        set: function (value) { this.$field01 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field02", {
        get: function () { return this.$field02; },
        set: function (value) { this.$field02 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field03", {
        get: function () { return this.$field03; },
        set: function (value) { this.$field03 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field04", {
        get: function () { return this.$field04; },
        set: function (value) { this.$field04 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field05", {
        get: function () { return this.$field05; },
        set: function (value) { this.$field05 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field06", {
        get: function () { return this.$field06; },
        set: function (value) { this.$field06 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field07", {
        get: function () { return this.$field07; },
        set: function (value) { this.$field07 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field08", {
        get: function () { return this.$field08; },
        set: function (value) { this.$field08 = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test1.prototype, "field09", {
        get: function () { return this.$field09; },
        set: function (value) { this.$field09 = value; },
        enumerable: false,
        configurable: true
    });
    return Test1;
}());
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());
var Test2 = /** @class */ (function (_super) {
    __extends(Test2, _super);
    function Test2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Test2;
}(FieldMixin('field09', 9, FieldMixin('field08', 8, FieldMixin('field07', 7, FieldMixin('field06', 6, FieldMixin('field05', 5, FieldMixin('field04', 4, FieldMixin('field03', 3, FieldMixin('field02', 2, FieldMixin('field01', 1, FieldMixin('field00', 0, Base))))))))))));
var size = 10000;
var instantiatePlain = Benchmark_js_1.Benchmark.new({
    name: 'Instantiate plain JS',
    cycle: function () {
        var instances = new Array(size);
        for (var i = 0; i < size; i++)
            instances[i] = new Test1();
    }
});
var instantiateMixed = Benchmark_js_1.Benchmark.new({
    name: 'Instantiate merged mixins',
    cycle: function () {
        var instances = new Array(size);
        for (var i = 0; i < size; i++)
            instances[i] = new Test2();
    }
});
var accessPlain = Benchmark_js_1.Benchmark.new({
    name: 'Access plain JS',
    setup: function () {
        return __awaiter(this, void 0, void 0, function () {
            var instances, i;
            return __generator(this, function (_a) {
                instances = new Array(size);
                for (i = 0; i < size; i++)
                    instances[i] = new Test1();
                return [2 /*return*/, instances];
            });
        });
    },
    cycle: function (iteration, cycle, state) {
        for (var i = 0; i < size; i++) {
            var instance = state[i];
            instance.field00++;
            instance.field01++;
            instance.field02++;
            instance.field03++;
            instance.field04++;
            instance.field05++;
            instance.field06++;
            instance.field07++;
            instance.field08++;
            instance.field09++;
        }
    }
});
var accessMixed = Benchmark_js_1.Benchmark.new({
    name: 'Access mixed JS',
    setup: function () {
        return __awaiter(this, void 0, void 0, function () {
            var instances, i;
            return __generator(this, function (_a) {
                instances = new Array(size);
                for (i = 0; i < size; i++)
                    instances[i] = new Test2();
                return [2 /*return*/, instances];
            });
        });
    },
    cycle: function (iteration, cycle, state) {
        for (var i = 0; i < size; i++) {
            var instance = state[i];
            // @ts-ignore
            instance.field00++;
            // @ts-ignore
            instance.field01++;
            // @ts-ignore
            instance.field02++;
            // @ts-ignore
            instance.field03++;
            // @ts-ignore
            instance.field04++;
            // @ts-ignore
            instance.field05++;
            // @ts-ignore
            instance.field06++;
            // @ts-ignore
            instance.field07++;
            // @ts-ignore
            instance.field08++;
            // @ts-ignore
            instance.field09++;
        }
    }
});
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, instantiatePlain.measureTillMaxTime()];
            case 1:
                _a.sent();
                return [4 /*yield*/, instantiateMixed.measureTillMaxTime()];
            case 2:
                _a.sent();
                return [4 /*yield*/, accessPlain.measureTillMaxTime()];
            case 3:
                _a.sent();
                return [4 /*yield*/, accessMixed.measureTillMaxTime()];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
run();
