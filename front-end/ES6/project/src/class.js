
// 访问器属性
class CustomHTMLElement {
    constructor (element) {
        this.element = element;
    }
    get html () {
        return this.element.innerHTML;
    }
    set html (value) {
        this.element.innerHTML = value;
    }
}

const descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');

console.log('get' in descriptor); // true
console.log('set' in descriptor); // true
console.log(descriptor.enumerable); // false

// 类的方法和属性可以使用变量
const className = 'testName';

class CustomName {
    constructor (name) {
        this.name = name;
    }
    [className] () {
        console.log(this.name);
    }
}

const custom = new CustomName('Niclae');
custom[className]();

// 生成器方法
class Collection {
    constructor () {
        this.items = [];
    }
    * [Symbol.iterator] () {
        yield *this.items.values();
    } }
const collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (const x of collection) {
    console.log(x);
}
// 输出:
// 1
// 2
// 3

// 静态成员

class PersonClass {
    // 等价于 PersonType 构造器
    constructor (name) {
        this.name = name;
    }
    // 等价于PersonType.prototype.sayName
    sayName () {
        console.log(this.name);
    }
    // 等价于 PersonType.create
    static create (name) {
        return new PersonClass(name);
    }
}
const person = PersonClass.create('Nicholas');


// 继承

function Rectangle (length, width) {
    this.length = length; this.width = width;
}
Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};
function Square (length) {
    Rectangle.call(this, length, length);
}
Square.prototype = Object.create(
    Rectangle.prototype,
    {constructor: {
        value:Square,
        enumerable: true,
        writable: true,
        configurable: true
    }
    });


const square = new Square(3);

console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
// 9
// true
// true


// extends
class Rectangles {
    constructor (length, width) {
        this.length = length;
        this.width = width;
    }
    getArea () {
        return this.length * this.width;
    }
}

class Squares extends Rectangles {
    constructor (length) {
        // 与 Rectangle.call(this, length, length) 相同
        super(length, length);
    }
    // 屏蔽类
    getArea () {
        // 会修改this指向
        super.getArea();
    }
}
const squares = new Squares(3);
console.log(squares.getArea());
console.log(squares instanceof Square);
console.log(squares instanceof Rectangle);
// 9
// true
// true


class MyArray extends Array { // 空代码块
}
const colors = new MyArray();
colors[0] = 'red';
console.log(colors.length);
colors.length = 0;
console.log(colors[0]);
