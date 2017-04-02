System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Mod;
    return {
        setters: [],
        execute: function () {
            Mod = (function () {
                function Mod($element) {
                    this.$element = $element;
                }
                Mod.prototype.append = function () {
                    this.$element.append('<h1>I\'m appended</h1>');
                };
                return Mod;
            }());
            exports_1("Mod", Mod);
        }
    };
});
//# sourceMappingURL=mod.js.map