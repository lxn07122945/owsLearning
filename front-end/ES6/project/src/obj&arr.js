console.log('----------数组与对象的新特性---------');

// es5
function createPerson(name, age) {
    return {
        name: name,
        age: age 
    };
}

// es6 
function createPerson6(name, age) {
    return {
        name,
        age 
    };
}
var result = createPerson('liuxiangnan', 25);
var result6 = createPerson6('liuxiangnan', 26);
console.log(result6);
console.log(result);

// 对象的属性简写
var person = {
    name: "Nicholas",
    sayName() {
        console.log(this.name);
    }
};

console.log(person.sayName());
// 可计算的属性名
var suffix = " name";
var testname = "testName";
var person = {
    ["first" + suffix]: "Nicholas",
    ["last" + suffix]: "Zakas",
    [testname]: testname
};
console.log(person["first name"]);
console.log(person["last name"]);
console.log(person[testname]);

// 新方法 object.is()
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
console.log(5 == 5);
console.log(5 == "5");
console.log(5 === 5);
console.log(5 === "5");
console.log(Object.is(5, 5));
console.log(Object.is(5, "5"));

// Object.assign() 方法:    

function EventTarget() { /*...*/ }
EventTarget.prototype = {
    constructor: EventTarget,
    emit: function(es) {
        console.log(es);
    },
    on: function() { /*...*/ }
}
var myObject = {}
Object.assign(myObject, EventTarget.prototype);
myObject.emit("somethingChanged");

var receiver = {};
Object.assign(receiver, {
    type: "js",
    name: "file.js" 
}, {
    type: "css"
});
console.log(receiver.type); // "css"
console.log(receiver.name); // "file.js"


// 数组相关方法

// concat
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = ['a', 'b', 'c', 'd'];
let conc = arr1.concat(arr2);
console.log(arr1 , conc);

// Array.of();
let arr3 = new Array(2);
console.log(arr3.length); // 2
console.log(arr3[0]); // undefined
console.log(arr3[1]); // undefined

let  arr4 = Array.of(3);
console.log(arr4);

//Array.from();

// find \findeIndex
let arrFind = [2, 34,36,44,25];
console.log(arrFind.find(n => n > 40));
console.log(arrFind.findIndex(n => n > 40));

// fill()


// copyWithin()
let numbers = [1, 2, 3, 4];
// 从索引 2 的位置开始粘贴
// 从数组索引 0 的位置开始复制数据
// 在遇到索引 1 时停止复制
numbers.copyWithin(2, 0, 1);
console.log(numbers.toString());
