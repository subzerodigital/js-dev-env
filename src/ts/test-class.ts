import * as $ from 'jquery';

class TestClass {
	selector: string;

	constructor(selector: string) {
		this.selector = selector;
		this.init();
	}

	init() {
		$(this.selector).append('<h3 class="boots">test Node</h3>');
		$(this.selector).on('click', (evt: JQueryEventObject) => {
			evt.preventDefault();
			console.log('haha-haha');
		});

		console.log('init');
	}
}

export default TestClass;