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
//# sourceMappingURL=mod.js.map