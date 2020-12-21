// 带默认值的函数：开源API的常用写法
makeRequest = (url, timeout = 2000, callback = function () {}) => {
    // 函数的剩余部分

};

// 参数默认值表达式
getValue = () => {
    return 5;
};
add = (first, second = getValue()) => {
    return first + second;
};
console.log(add(1, 1)); // 2
console.log(add(1)); // 6

// 允许将前边的参数作为后边参数的默认值或者计算参数，而不允许后边的参数作为前边参数的默认值

getValue2 = (value) => {
    return value + 5;
};
add2 = (first, second = getValue2(first)) => {
    return first + second;
};
console.log(add2(1, 1)); // 2
console.log(add(1)); // 7

// 扩展运算符与剩余参数
const values = [25, 50, 75, 100];
console.log(Math.max(...values));

// 函数的名称属性
function doSomething () {
    // ...
    const a = 123;
    return a;
}
const doAnotherThing = function () { // ...
};
console.log(doSomething.name); console.log(doAnotherThing.name);
// "doSomething"
// "doAnotherThing"

// 双重用途
function Person (name) {
    this.name = name;
}
const person = new Person('Nicholas');
const notAPerson = Person('Nicholas');
console.log(person); // "[Object object]" 
console.log(notAPerson); // "undefined"

// 块级函数
if (true) {
    console.log(typeof doSpace);
    function doSpace() {
        // ...
    }
    doSpace();
}
console.log(doSpace);
console.log(typeof doSpace);
// 箭头函数

let arrowFunction = (name, age) => {
    return name,age;
}

arrowFunction ('spance', 25);
console.log();