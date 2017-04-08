"use strict";
exports.__esModule = true;
var mod_1 = require("./mod");
var $ = require("jquery");
var polling_1 = require("../component/polling/ts/polling");
$('body').append('<h1>haha</h1>');
var mod = new mod_1.Mod($('.mod'));
mod.append();
console.log("haha");
console.log(polling_1["default"]);
//# sourceMappingURL=template.js.map