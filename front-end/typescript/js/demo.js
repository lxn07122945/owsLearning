"use strict";
// // 定义字符串类型
// let str:string = '123';
// // 定义布尔类型
// let newBoolean:boolean = true;
// // 定义数字类型
// let a:number = 123;
// // 定义数字类型的数组1
// var arr:number[] = [123,234];
// // 定义数组类型的数组2
// var arr2:Array<number> = [123,234];
function printName(name) {
    console.log(name.firstName + name.age);
}
printName({ firstName: 'xiangnan', secondName: 'jinxin' });
var md5 = function (key, value) {
    //
    return key + value;
};
console.log(md5('name', 'liuxiangnan'));
var arr = ['123', 'abc'];
var userTest = {
    123: 'asdf',
    23: '123'
};
// 接口的扩展；可以继承的接口
/**
 * 泛型
 * T表示泛型
 */
function getData(str) {
}
// 泛型类
var Main = /** @class */ (function () {
    function Main() {
        this.list = [];
    }
    Main.prototype.add = function (value) {
    };
    return Main;
}());
var ass = new Main(); // 实例化类，并指定泛型代表的类型
var fn = function (name, age) {
    return '123';
};
