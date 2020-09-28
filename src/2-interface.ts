// 接口（Interfaces）来定义对象的类型

// 1、接口描述一个对象
interface Person {
    name: string;
    age: number;
}

// person必须有name和age属性，不然会报错
const person: Person = {
    name: 'Tom',
    age: 21  //必须为number类型，不然会报错
}


// 2、接口中定义函数
// 接口中定义函数,表示约定函数的参数必须为Person实例，返回值为string。
interface PersonFun {
    (person: Person): string;
}

let showPerson: PersonFun
// 具体实现
showPerson = function(person: Person) {
    return `hello!  ${person.name}.`;
}


// 3、定义可选属性
interface Student0 {
    name: string;
    age?: number;
}

// age 属性可选
const stu9:Student0 = { name: 'Amy' }


// 4、定义只读属性
interface Person2 {
    name: string;
    readonly age: number;
}

const person2: Person2 = {
    name: 'Tom',
    age: 21
}

// person2.age = 22; // 报错


// 5、可索引类型

// 数字索引类型
interface ColorArray {
    [index: number]: string;
}

let color: ColorArray;
color = ['Red', 'Blue', 'Green'];

// 6、字符串索引类型
interface ColorMap {
    [index: string]: string;
}

let colorMap: ColorMap;
colorMap = {
    a: 'Red',
    b: 'Blue',
    c: 'Green'
};

console.log(colorMap.a);
console.log(colorMap['a']);

// 7、混合接口
interface People2{
    (): void;
    // (start: number): string;
    name: string;
    age: number;
    sayHi(): void;
    (start: number): string;
}

// 这边需要用到类型断言 as 或者 <> 
function getPeople(): People2{
    let people: People2 = (()=>{}) as People2;
    // let people = <People2>function (start: number) {
    //     return `开始时间为：${start}`;
    // };
    people.name = 'James';
    people.age = 23;
    people.sayHi = () => { console.log('Hi!') }
    return  people
}

let p = getPeople();
p();
p.age = 24;


// 8、接口继承
interface People3{
    name: string;
}

interface Student3 extends People3{
    age: number;
}

let stu3: Student3 = {name: '小明', age: 12 };

// 一个接口可以继承多个接口， 使用 ，分隔
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}
let squ3: Square = {color: '小明', penWidth: 12, sideLength:1 };

// 9、接口实现
interface Foo {
    name: string;
    age: number;
    sayHello(): void;
}

class Bar implements Foo {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello(): void {
        console.log('Hello');
    }
}

// 10、多种类型 | 符号
interface Shape2 {
    type: string | number
}
let shape2 = <Shape2>{};
// shape.type = 1;
shape2.type = '1';
console.log(shape2.type)
// 或者
let shape3:Shape2 = {type:1};

// 以下会合并
interface Alarm {
    price: number;
}
interface Alarm {
    // price: string;  // 类型不一致，会报错
    weight: number;
}