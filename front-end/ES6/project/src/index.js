// import {Dog} from './dog';
import icon from './images/con.ico';
import './let';
import {Dog} from './dog';
require('./class');
require('./css/main.css');

class Main {
    constructor () {
        document.write('<span>hi, this is a test for es6!</span>');
        console.info('hi this is a test for ES6');
        document.write(`<img src=${icon}>`);
        const dog = new Dog('Nike');
        dog.sayName();
    }
}
new Main();
