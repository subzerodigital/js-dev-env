import 'jasmine';
import 'fs';
import * as $ from 'jquery';
import TestClass from './test-class';

let test1;
let test2;

describe('my first test', () => {

	beforeEach(() => {
		jasmine.clock().install();
		console.log('set up2');
		$('body').append('<div class="test-con"><h2>haha form h2</h2></div><div class="test-con2"><h2>haha form h2</h2></div>');
		test1 = new TestClass('.test-con');
		test2 = new TestClass('.test-con2');
	});

	afterEach(() => {
		jasmine.clock().uninstall();
		console.log('remove it2');
		$('body').empty();
		test1 = null;
	});


	it('should have proper set up',function(){

		jasmine.clock().tick(115000);
		let con = $('body').find('.test-con');
		let test = $('body').find('.boots');
		expect(con.length).toBe(1);
		expect(test.length).toBe(2);

	});

	it('should handle click',function(){
		jasmine.clock().tick(115000);
		let con1 = $('body').find('.test-con');
		let test = $('body').find('.boots');
		expect(con1.length).toBe(1);
		expect(test.length).toBe(2);
		con1.click();
	});

	it('should handle click',function(){
		jasmine.clock().tick(115000);
		let con1 = $('body').find('.test-con');
		let con2 = $('body').find('.test-con2');
		let test = $('body').find('.boots');
		expect(con1.length).toBe(1);
		expect(test.length).toBe(2);
		con1.click();
		con2.click();
	});
});