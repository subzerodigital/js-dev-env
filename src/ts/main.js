"use strict";
exports.__esModule = true;
require("jquery");
require("tether");
require("util");
require("modal");
$('.myButton').click(function () {
    $('#myModal').modal({ focus: true });
});
var Contact = (function () {
    function Contact(name, phone, email) {
        if (name === void 0) { name = 'stan'; }
        if (phone === void 0) { phone = "123"; }
        if (email === void 0) { email = undefined; }
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.init();
    }
    Contact.prototype.init = function () {
        console.log('init');
    };
    return Contact;
}());
var contact1 = new Contact('stan1', null, 'stan@hotmai.com');
var account = {
    name: 'stanley',
    city: 'Anytown',
    state: 'NSWAA',
    zip: '2007'
};
var myName = account.name, myCity = account.city, myState = account.state, myZip = account.zip;
var myAccount = {
    street: 'Nurery',
    city: 'Hornsby',
    zip: 123
};
var myFunction = function (_a) {
    var zpi = _a.zip, city = _a.city, street = _a.street;
    console.log(street, city, zpi);
};
myFunction(myAccount);
var names = ['1', '2', '3'];
var mine = names[0], your = names[1], his = names[2];
//# sourceMappingURL=main.js.map