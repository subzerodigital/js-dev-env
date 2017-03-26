(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Mod = (function () {
        function Mod($element) {
            this.$element = $element;
        }
        Mod.prototype.append = function () {
            this.$element.append('<h1>I\'m appended</h1>');
        };
        return Mod;
    }());
    exports.Mod = Mod;
});
//# sourceMappingURL=mod.js.map