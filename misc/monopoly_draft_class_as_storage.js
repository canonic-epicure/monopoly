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
//------------------------------------------------------------------------------
var DataType0VTable = {
    prop0_0_w: function (host, value) { return host.prop0_0 = value; },
    prop0_1_w: function (host, value) { return host.prop0_1 = value; },
    prop0_2_w: function (host, value) { return host.prop0_2 = value; },
    prop0_3_w: function (host, value) { return host.prop0_3 = value; },
    prop0_4_w: function (host, value) { return host.prop0_4 = value; },
    prop0_0: function (host) { return host.prop0_0; },
    prop0_1: function (host) { return host.prop0_1; },
    prop0_2: function (host) { return host.prop0_2; },
    prop0_3: function (host) { return host.prop0_3; },
    prop0_4: function (host) { return host.prop0_4; },
    prop1_0_w: function (host, value) { throw "oops"; },
    prop1_1_w: function (host, value) { return host.prop1_1 = value; },
    prop1_0: function (host) { return host.prop1_0; },
    prop1_1: function (host) { return host.prop1_1; },
    prop2_0_w: function (host, value) { return host.prop2_0 = value; },
    prop2_1_w: function (host, value) { return host.prop2_1 = value; },
    prop2_0: function (host) { return host.prop2_0; },
    prop2_1: function (host) { return host.prop2_1; },
    prop3_0_w: function (host, value) { return host.prop3_0 = value; },
    prop3_1_w: function (host, value) { return host.prop3_1 = value; },
    prop3_0: function (host) { return host.prop3_0; },
    prop3_1: function (host) { return host.prop3_1; },
    prop4_0_w: function (host, value) { return host.prop4_0 = value; },
    prop4_1_w: function (host, value) { return host.prop4_1 = value; },
    prop4_0: function (host) { return host.prop4_0; },
    prop4_1: function (host) { return host.prop4_1; },
};
var DataType0 = /** @class */ (function () {
    function DataType0() {
        this.prop0_0 = 0;
        this.prop0_1 = 0;
        this.prop0_2 = 0;
        this.prop0_3 = 0;
        this.prop0_4 = 0;
    }
    Object.defineProperty(DataType0.prototype, "vtable", {
        get: function () {
            return DataType0VTable;
        },
        enumerable: false,
        configurable: true
    });
    return DataType0;
}());
//------------------------------------------------------------------------------
var DataType1VTable = {
    prop0_0_w: function (host, value) { return host.prop0_0 = value; },
    prop0_1_w: function (host, value) { return host.prop0_1 = value; },
    prop0_2_w: function (host, value) { return host.prop0_2 = value; },
    prop0_3_w: function (host, value) { return host.prop0_3 = value; },
    prop0_4_w: function (host, value) { return host.prop0_4 = value; },
    prop0_0: function (host) { return host.prop0_0; },
    prop0_1: function (host) { return host.prop0_1; },
    prop0_2: function (host) { return host.prop0_2; },
    prop0_3: function (host) { return host.prop0_3; },
    prop0_4: function (host) { return host.prop0_4; },
    prop1_0_w: function (host, value) { return host.prop1_0 = value; },
    prop1_1_w: function (host, value) { return host.prop1_1 = value; },
    prop1_0: function (host) { return host.prop1_0; },
    prop1_1: function (host) { return host.prop1_1; },
    prop2_0_w: function (host, value) { return host.prop2_0 = value; },
    prop2_1_w: function (host, value) { return host.prop2_1 = value; },
    prop2_0: function (host) { return host.prop2_0; },
    prop2_1: function (host) { return host.prop2_1; },
    prop3_0_w: function (host, value) { return host.prop3_0 = value; },
    prop3_1_w: function (host, value) { return host.prop3_1 = value; },
    prop3_0: function (host) { return host.prop3_0; },
    prop3_1: function (host) { return host.prop3_1; },
    prop4_0_w: function (host, value) { return host.prop4_0 = value; },
    prop4_1_w: function (host, value) { return host.prop4_1 = value; },
    prop4_0: function (host) { return host.prop4_0; },
    prop4_1: function (host) { return host.prop4_1; },
};
var DataType1 = /** @class */ (function (_super) {
    __extends(DataType1, _super);
    function DataType1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prop1_0 = 0;
        _this.prop1_1 = 0;
        return _this;
    }
    Object.defineProperty(DataType1.prototype, "vtable", {
        get: function () {
            return DataType1VTable;
        },
        enumerable: false,
        configurable: true
    });
    return DataType1;
}(DataType0));
//------------------------------------------------------------------------------
var DataType2VTable = {
    prop0_0_w: function (host, value) { return host.prop0_0 = value; },
    prop0_1_w: function (host, value) { return host.prop0_1 = value; },
    prop0_2_w: function (host, value) { return host.prop0_2 = value; },
    prop0_3_w: function (host, value) { return host.prop0_3 = value; },
    prop0_4_w: function (host, value) { return host.prop0_4 = value; },
    prop0_0: function (host) { return host.prop0_0; },
    prop0_1: function (host) { return host.prop0_1; },
    prop0_2: function (host) { return host.prop0_2; },
    prop0_3: function (host) { return host.prop0_3; },
    prop0_4: function (host) { return host.prop0_4; },
    prop1_0_w: function (host, value) { return host.prop1_0 = value; },
    prop1_1_w: function (host, value) { return host.prop1_1 = value; },
    prop1_0: function (host) { return host.prop1_0; },
    prop1_1: function (host) { return host.prop1_1; },
    prop2_0_w: function (host, value) { return host.prop2_0 = value; },
    prop2_1_w: function (host, value) { return host.prop2_1 = value; },
    prop2_0: function (host) { return host.prop2_0; },
    prop2_1: function (host) { return host.prop2_1; },
    prop3_0_w: function (host, value) { return host.prop3_0 = value; },
    prop3_1_w: function (host, value) { return host.prop3_1 = value; },
    prop3_0: function (host) { return host.prop3_0; },
    prop3_1: function (host) { return host.prop3_1; },
    prop4_0_w: function (host, value) { return host.prop4_0 = value; },
    prop4_1_w: function (host, value) { return host.prop4_1 = value; },
    prop4_0: function (host) { return host.prop4_0; },
    prop4_1: function (host) { return host.prop4_1; },
};
var DataType2 = /** @class */ (function (_super) {
    __extends(DataType2, _super);
    function DataType2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prop2_0 = 0;
        _this.prop2_1 = 0;
        return _this;
    }
    Object.defineProperty(DataType2.prototype, "vtable", {
        get: function () {
            return DataType2VTable;
        },
        enumerable: false,
        configurable: true
    });
    return DataType2;
}(DataType0));
//------------------------------------------------------------------------------
var DataType3VTable = {
    prop0_0_w: function (host, value) { return host.prop0_0 = value; },
    prop0_1_w: function (host, value) { return host.prop0_1 = value; },
    prop0_2_w: function (host, value) { return host.prop0_2 = value; },
    prop0_3_w: function (host, value) { return host.prop0_3 = value; },
    prop0_4_w: function (host, value) { return host.prop0_4 = value; },
    prop0_0: function (host) { return host.prop0_0; },
    prop0_1: function (host) { return host.prop0_1; },
    prop0_2: function (host) { return host.prop0_2; },
    prop0_3: function (host) { return host.prop0_3; },
    prop0_4: function (host) { return host.prop0_4; },
    prop1_0_w: function (host, value) { return host.prop1_0 = value; },
    prop1_1_w: function (host, value) { return host.prop1_1 = value; },
    prop1_0: function (host) { return host.prop1_0; },
    prop1_1: function (host) { return host.prop1_1; },
    prop2_0_w: function (host, value) { return host.prop2_0 = value; },
    prop2_1_w: function (host, value) { return host.prop2_1 = value; },
    prop2_0: function (host) { return host.prop2_0; },
    prop2_1: function (host) { return host.prop2_1; },
    prop3_0_w: function (host, value) { return host.prop3_0 = value; },
    prop3_1_w: function (host, value) { return host.prop3_1 = value; },
    prop3_0: function (host) { return host.prop3_0; },
    prop3_1: function (host) { return host.prop3_1; },
    prop4_0_w: function (host, value) { return host.prop4_0 = value; },
    prop4_1_w: function (host, value) { return host.prop4_1 = value; },
    prop4_0: function (host) { return host.prop4_0; },
    prop4_1: function (host) { return host.prop4_1; },
};
var DataType3 = /** @class */ (function (_super) {
    __extends(DataType3, _super);
    function DataType3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prop3_0 = 0;
        _this.prop3_1 = 0;
        return _this;
    }
    Object.defineProperty(DataType3.prototype, "vtable", {
        get: function () {
            return DataType3VTable;
        },
        enumerable: false,
        configurable: true
    });
    return DataType3;
}(DataType0));
//------------------------------------------------------------------------------
var DataType4VTable = {
    prop0_0_w: function (host, value) { return host.prop0_0 = value; },
    prop0_1_w: function (host, value) { return host.prop0_1 = value; },
    prop0_2_w: function (host, value) { return host.prop0_2 = value; },
    prop0_3_w: function (host, value) { return host.prop0_3 = value; },
    prop0_4_w: function (host, value) { return host.prop0_4 = value; },
    prop0_0: function (host) { return host.prop0_0; },
    prop0_1: function (host) { return host.prop0_1; },
    prop0_2: function (host) { return host.prop0_2; },
    prop0_3: function (host) { return host.prop0_3; },
    prop0_4: function (host) { return host.prop0_4; },
    prop1_0_w: function (host, value) { return host.prop1_0 = value; },
    prop1_1_w: function (host, value) { return host.prop1_1 = value; },
    prop1_0: function (host) { return host.prop1_0; },
    prop1_1: function (host) { return host.prop1_1; },
    prop2_0_w: function (host, value) { return host.prop2_0 = value; },
    prop2_1_w: function (host, value) { return host.prop2_1 = value; },
    prop2_0: function (host) { return host.prop2_0; },
    prop2_1: function (host) { return host.prop2_1; },
    prop3_0_w: function (host, value) { return host.prop3_0 = value; },
    prop3_1_w: function (host, value) { return host.prop3_1 = value; },
    prop3_0: function (host) { return host.prop3_0; },
    prop3_1: function (host) { return host.prop3_1; },
    prop4_0_w: function (host, value) { return host.prop4_0 = value; },
    prop4_1_w: function (host, value) { return host.prop4_1 = value; },
    prop4_0: function (host) { return host.prop4_0; },
    prop4_1: function (host) { return host.prop4_1; },
};
var DataType4 = /** @class */ (function (_super) {
    __extends(DataType4, _super);
    function DataType4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prop4_0 = 0;
        _this.prop4_1 = 0;
        return _this;
    }
    Object.defineProperty(DataType4.prototype, "vtable", {
        get: function () {
            return DataType4VTable;
        },
        enumerable: false,
        configurable: true
    });
    return DataType4;
}(DataType0));
//------------------------------------------------------------------------------
var size = 30000;
var generate = function () {
    var instances = [];
    do {
        instances.push(new DataType0());
        instances.push(new DataType1());
        instances.push(new DataType2());
        instances.push(new DataType3());
        instances.push(new DataType4());
    } while (instances.length < size);
    return instances;
};
var instantiate = Benchmark_js_1.BenchmarkC({
    name: 'Instantiate monopoly',
    cycle: function () {
        return generate();
    }
});
//------------------------------------------------------------------------------
var access = Benchmark_js_1.BenchmarkC({
    name: 'Access monopoly',
    setup: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, generate()];
            });
        });
    },
    cycle: function (iteration, cycle, state) {
        for (var i = 0; i < size; i++) {
            var instance = state[i];
            var vtable = instance.vtable;
            vtable.prop0_0_w(instance, vtable.prop0_0(instance) + 3);
            vtable.prop0_1_w(instance, vtable.prop0_1(instance) + 3);
            vtable.prop0_2_w(instance, vtable.prop0_2(instance) + 3);
            vtable.prop0_3_w(instance, vtable.prop0_3(instance) + 3);
            vtable.prop0_4_w(instance, vtable.prop0_4(instance) + 3);
        }
    }
});
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // await instantiate.measureTillMaxTime()
            return [4 /*yield*/, access.measureTillMaxTime()];
            case 1:
                // await instantiate.measureTillMaxTime()
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
run();
