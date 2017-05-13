import 'jasmine';
import 'fs';
import * as $ from 'jquery'

beforeEach(()=>{
	console.log('set up');
	$('body').append('<div class="test-con"><h2>haha form h2</h2></div>');
});

afterEach(()=>{
	console.log('remove it');
	//$('body').html('');
});

describe('my first test', () => {
	it('should be ok', () => {
		let h1 = $('body').find('h1');
		let h2 = $('body').find('.test-con h2');
		expect(1).toBe(1);
		expect(h2.text()).toContain('haha');
	});

	it('should click', ()=>{

		let btn = $('body').find('.click-test');

		btn.click();

	});
});