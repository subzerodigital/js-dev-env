//amd
import * as $ from 'jquery'

//system
//import $ from 'jquery'

class Mod {

	$element:JQuery;
	constructor($element:JQuery){
		this.$element = $element;
	}

	append():void {
		this.$element.append('<h1>I\'m appended</h1>');
	}

}

export {Mod}









