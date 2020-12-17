console.log('-------字符串与正则-------');
const text = '  s    abcabc s2     s  ';
// trim: 去除空行
console.log(text);
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());

// charAt返回字符串中指定的字符
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// charCodeAt返回字符串中对应位置的unicode
console.log(text.charCodeAt(0));
console.log(text.charCodeAt(1));
console.log(text.charCodeAt(2));

// codePointAt: 给定字符串中按位 置提取 Unicode 代码点;接受的是码元位置而非字符位置
console.log(text.codePointAt(0));
console.log(text.codePointAt(1));
console.log(text.codePointAt(2));

// String.fromCodePoint(): 用给定的代码点来产生包含单个字符的字符串。

console.log(String.fromCodePoint(256)); // Ā

// normalize() 方法

// 识别子字符串
console.log(text.indexOf('a')); // 获取第一个a的下标
console.log(text.lastIndexOf('a')); // 获取最后一个a的下标
// starsWith、endsWith、includes 会返回Boolean值
const msg = 'Hello world!';
console.log(msg.startsWith('Hello'));
console.log(msg.endsWith('!'));
console.log(msg.includes('o'));
console.log(msg.startsWith('o'));
console.log(msg.endsWith('world!'));
console.log(msg.includes('x'));
console.log(msg.startsWith('o', 4));
console.log(msg.endsWith('o', 8));
console.log(msg.includes('o', 8));

// repeat()生成重复的字符串
const res = 'liu';
console.log(res.repeat(4));

// 模板字面量
// 多行字符串:针对多行字符串的形式概念;
// 基本的字符串格式化:将字符串部分替换为已存在的变量值的能力;
// HTML 转义:能转换字符串以便将其安全插入到 HTML 中的能力。
const model1 = 'hello!';

console.log(model1);
console.log(typeof model1);
console.log(model1.length);
// 多行字符串, 注意换行之后的缩进
const model2 = `hello,
this world!`;
console.log(model2);

// 变量替换，或者计算结果
const name = 'liuxiangnan';
const say = `hi, ${name}`;
console.log(say);

// 标签化模版

const person = 'Mike';
const age = 28;

myTag = (strings, personExp, ageExp) => {

    const str0 = strings[0]; // "that "
    const str1 = strings[1]; // " is a "

    let ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;

};

const output = myTag`that ${person} is a ${age}`;

console.log(output);
