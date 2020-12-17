// 解构赋值
{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b);
}
{
    let a, b, rest;
    [a, b, c = 3] = [1, 2];
    console.log(a, b, c);
}
{
    // 应用场景：变量交换
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);
}

{
    // 对函数返回值的批量赋值
    f = () => {
        return ['price', 'total'];
    };
    const [a, b] = f();
    console.log(a, b);
}

{
    // 函数返回结果长度未知
    f = () => {
        return ['price', 'total', 'num', 'name', 'uid'];
    };
    const [a, ...b] = f();
    console.log(a, b);
    // price, ['total', 'num', 'name', 'uid']
}
{
    // 对象的解构赋值： 按照key值进行赋值
    const o = {
        name: 'liu',
        age: 30
    };
    const {name, age} = o;
    console.log(name, age);

    // 赋值给本地不同的变量名
    const node = {
        type: 'Identifier',
        name: 'foo'
    };
    const {type: localType, name: localName} = node;
    console.log(localType, localName);
}
