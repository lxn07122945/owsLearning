
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

// import { useDebugValue } from "react";

// // 定义元组类型:数组的一种，可以指定每一项的类型
// var arr3:[string, boolean, number] = ['123',true,123];

// //枚举类型,用于定义状态或者枚举值

// enum flag {
//     success=1,error=-1
// }
// var f:flag = flag.success;

// console.log(f);

// // 枚举类型不赋值，默认为索引值

// enum Color {blue,red,green}

// console.log(Color.blue === 0) // true

// // 任意类型 any

// var oBox:any = document.getElementById('box');

// // oBox.style.color = 'white';

// // 空类型和undefined  ： 其他类型的子类型
// // 没有赋值就是undefined
// var num : undefined | number;
// console.log(num);
// num = 123;
// console.log(num);

// // void 类型：标示没有任何类型

// // 表示方法没有返回任何类型
// function run ():void {
//     console.log('run');
// }

// run();

// // never类型：其他类型，包含null和undefined，表示从来不会出现的值

// var b : never;

// /**
//  * 函数定义方法
//  * 1、函数声明法
//  * 2、匿名函数法
//  */

// // 1、函数声明法
// function run2 ():string {
//     return '123';
// }
// // 2、匿名函数法
// var fn2 = function ():number {
//     return 2;
// }
// // 3、函数传参数
// function fn3 (name:string, age:number):string {
//     console.log(name, age);
//     return 'name';
// }

// fn3('xiangnan', 234);

// // 可选参数：可选参数必须放在最后

// function fn4 (name:string, age?:number):string {
//     console.log(name, age);
//     return 'name';
// }
// fn4('xiangnana a a')

// // 默认参数
// function fn5 (name:string, age:number = 234):string {
//     console.log(name, age);
//     return 'name';
// }
// fn5('xiangnana a a')

// // 剩余参数

// // 函数重载

// // 类的实现

// // public： 在当前类、子类、类外部都可以访问
// // potected： 保护类，只能在当前类和子类中访问，在类外部不能访问
// // private: 在当前类中可以访问

// class Person {
//     public name:string;
//     static sex:string = '男';
//     constructor (name:string) {
//         this.name = name;
//     }
//     getName():void {
//         console.log(this.name);
//     }
//     setName(name:string):void {
//         this.name = name;
//     }
//     run ():void {
//         alert(this.name)
//     }
//     static print () {
//         console.log('print', Person.sex);
//     }
// }

// let p  = new Person('xiagnnan');
// p.run();
// Person.print();

// // 多态 ： 类中定义一个方法，但是不去实现；让继承它的实例去实现；每一个子类的表现不一样
// // 多态的本质是继承


// // 抽象类
// // abstract关键字定义抽象类和抽象方法
// // abstract关键字定义的抽象类和抽象方法，不包含具体实现，但是在继承类中必须包含该方法的实现
// // 抽象类定和抽象方法来定义标准
// abstract class Animal {
//     public name:string;
//     constructor (name:string) {
//         this.name = name;
//     }
//     abstract eat ():any;
// }

// class Dog extends Animal {
//     constructor (name:string) {
//         super(name)
//     }
//     eat(){
//         console.log(`${this.name}吃屎吧`);
//     }
// }

// new Dog('wangcai').eat();

/**
 * ts中的接口
 * 1、属性接口
 * 2、函数类型的接口
 * 3、可索引接口
 * 4、类类型的接口
 */

// 1:属性接口：对json的约束

/**
 * ts中定义方法，传入一个对象类型的参数；对该对象进行约束
 */
// interface关键字定义接口

interface fullName  {
    // 必须传入参数
    firstName: string;
    secondName: string;
    age?:number
}
function printName (name:fullName):void {
    console.log(name.firstName + name.age);
}
printName({firstName: 'xiangnan', secondName: 'jinxin'});


// 2、函数类型的接口：对函数传入参数以及返回值进行约束; 还可以进行批量约束

interface encrypt {
    (key:string,value:string):string
}

var md5:encrypt = function (key:string, value:string) {
    //
    return key + value;
}
console.log(md5('name','liuxiangnan'));

// 3、可索引接口，通常用于对数组、对象进行约束

// 对数组的约束
interface useArr {
    [index:number]:string
}

var arr:useArr = ['123','abc'];

// 对对象的约束
interface userObj {
    [index:number]:string
}

var userTest : userObj = {
    123:'asdf',
    23: '123'
}

// 类类型的接口

interface Animal {
    name:string;
    eat(str:string):void;
}



// 接口的扩展；可以继承的接口


/**
 * 泛型
 * T表示泛型
 */

function getData<T>(str:T):any {
}

// 泛型类

class Main<T>{
    public list:T[]= [];
    add(value:T):void {

    }
}

var ass = new Main<number>(); // 实例化类，并指定泛型代表的类型

interface configFn {
    (name:string, age:number):string;
}

var fn : configFn = function (name:string, age:number):string {
    return '123'
}
