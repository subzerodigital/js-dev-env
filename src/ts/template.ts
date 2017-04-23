import {Mod} from './mod'
//amd
import * as $ from 'jquery'

import iAccount from './iAccount'

//system
//import $ from 'jquery'
import pollingNum from '../component/polling/ts/polling'

//$('body').append('<h1>haha</h1>');
const mod = new Mod($('.mod'));
mod.append();

console.log("haha");
console.log(pollingNum);


class Contact {

	name: string;
	phone: string;
	email: string;

	constructor(name: string = 'stan', phone: string = "123", email: any = undefined) {
		this.name = name;
		this.phone = phone;
		this.email = email;

		this.init();
	}

	init() {
		console.log('init');
	}
}

const contact1 = new Contact('stan1', null, 'stan@hotmai.com');

const account = {
	name: 'stanley',
	city: 'Anytown',
	state: 'NSWAA',
	zip: '2007'
};


let {name: myName, city: myCity, state: myState, zip: myZip} = account;
console.log(myName, myCity);

const myAccount: iAccount = {
	street: 'Nurery',
	city: 'Hornsby',
	zip: 123
};

console.log(myAccount);

const myFunction = ({zip: zpi, city: city, street: street}: iAccount) => {
	console.log(street, city, zpi);
};

myFunction(myAccount);

const names = ['1', '2', '3'];
const [mine, your, his] = names;








