import $ from 'jquery'
import app from './app'
import numeral from 'numeral'

$('body').html('haha');
console.log(numeral(1000).format('$0,0.00'));
console.log(app.name);


