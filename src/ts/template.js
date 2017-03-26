(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./mod", "jquery", "../component/polling/ts/polling"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var mod_1 = require("./mod");
    var jquery_1 = require("jquery");
    var polling_1 = require("../component/polling/ts/polling");
    var mod = new mod_1.Mod(jquery_1["default"]('.mod'));
    mod.append();
    console.log("haha");
    console.log(polling_1["default"]);
});
//# sourceMappingURL=template.js.map