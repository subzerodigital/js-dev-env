import 'jquery';

const html:string = '<div class=""><h3>leather</h3></div>';

class TestClassTwo {
	selector: string;
	constructor(selector: string) {
		this.selector = selector;
		this.init();
	}

	init() {
		$(this.selector).append('<h3 class="leather-boots">test Node</h3>').after(html);

		$(this.selector).on('click', (evt: JQueryEventObject) => {
			evt.preventDefault();
			console.log('wow=wow');
		});

	}
}

export default TestClassTwo;