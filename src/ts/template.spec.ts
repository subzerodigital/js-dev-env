import 'jasmine';
import 'fs';
import * as $ from 'jquery';
import Mod from "./mod";

beforeEach(() => {
	console.log('set up');
	$('body').append('<style>h2 {color:red}</style>');
	$('body').append('<div class="test-con"><h2>haha form h2</h2></div>');
	window.resizeBy(100,100);
});

afterEach(() => {
	console.log('remove it');
	$('body').html('');
});

describe('my first test', () => {
	it('should be ok', () => {
		let h1 = $('body').find('h1');
		let h2 = $('body').find('.test-con h2');
		expect(h2.text()).toContain('haha');
	});

	it('should click', () => {
		let btn = $('body').find('.click-test');
		btn.click();
	});
});

describe('unit test mod module or class', () => {
	it('mode append anchor', () => {
		let modTest = new Mod('.test-con');

		expect(modTest.phone).toBe(123);
		let $testCon = $('.test-con').find('.mod');
		expect($testCon.length).toBe(1);

		window.resizeBy(100,100);

		console.log($(window).width());

	});
});