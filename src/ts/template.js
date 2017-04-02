System.register(["./mod", "jquery", "../component/polling/ts/polling"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mod_1, jquery_1, polling_1, mod;
    return {
        setters: [
            function (mod_1_1) {
                mod_1 = mod_1_1;
            },
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (polling_1_1) {
                polling_1 = polling_1_1;
            }
        ],
        execute: function () {
            mod = new mod_1.Mod(jquery_1["default"]('.mod'));
            mod.append();
            console.log("haha");
            console.log(polling_1["default"]);
        }
    };
});
//# sourceMappingURL=template.js.map