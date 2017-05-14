//amd
import * as $ from 'jquery'

//system

class Mod {

	$element:JQuery;
	phone: number;

	constructor(selector:string){
		this.$element = $(selector);
		this.phone = 123;
		this.append();
	}

	append():void {
		this.$element.append('<a href="#" class="mod">I\'m appended</a>');
	}

}

export default Mod;









