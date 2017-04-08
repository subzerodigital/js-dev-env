import {Mod} from './mod'
//amd
import * as $ from 'jquery'

//system
//import $ from 'jquery'
import pollingNum from '../component/polling/ts/polling'

$('body').append('<h1>haha</h1>');
const mod = new Mod($('.mod'));
mod.append();

console.log("haha");
console.log(pollingNum);



