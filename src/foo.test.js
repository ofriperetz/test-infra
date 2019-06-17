"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var foo_1 = require("./foo");
test('basic', function () {
    expect(foo_1.sum()).toBe(0);
});
test('basic again', function () {
    expect(foo_1.sum(1, 2, 5)).toBe(8);
});
test('ok', function () {
    expect(3).toBe(5);
});
//# sourceMappingURL=foo.test.js.map