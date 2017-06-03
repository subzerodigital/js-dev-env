import 'jquery';

const html:string = '<div class=""><h3>leather</h3></div>';

class TestClass {
	selector: string;
	constructor(selector: string) {
		this.selector = selector;
		this.init();
	}

	init() {
		$(this.selector).append('<h3 class="boots">test Node</h3>').after(html);

		$(this.selector).on('click', (evt: JQueryEventObject) => {
			evt.preventDefault();
			console.log('haha-haha');
		});

	}
}

export default TestClass;