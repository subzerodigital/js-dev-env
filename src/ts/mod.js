"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//amd
var $ = require("jquery");
//system
var Mod = (function () {
    function Mod(selector) {
        this.$element = $(selector);
        this.phone = 123;
        this.append();
    }
    Mod.prototype.append = function () {
        this.$element.append('<a href="#" class="mod">I\'m appended</a>');
    };
    return Mod;
}());
exports.default = Mod;
