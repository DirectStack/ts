// 变量,注意是类型小写，
let sA:string = 'Kris'
let nA:number = 1
let bA:boolean = false

let u: undefined = undefined;
let n: null = null;

// 这样报错，new是obj
// let testBoolean: boolean = new Boolean();


// 定义一个空对象
let obj: object = {};

// 数组定义
let asA: string[] = ['a', 'b', 'c'];
// 泛型
let asA1: Array<number> = [1, 2, 3];



// 元组
// 这样错误
// let t: [string, number, boolean] = [1, 2, 3]; 
let t2: [string, number, boolean] = ['1', 2, true];

// 枚举enum
enum Fruits {Apple, Banana, Orange}

let a: Fruits = Fruits.Apple; // 0

let o: string = Fruits[2]; // 'Orange'

//any
let anyList: any[] = [2, 'b', true];


// 函数
// 可选参数后面不允许再出现必需参数了：
// TypeScript 会将添加了默认值的参数识别为可选参数,此时就不受「可选参数必须接在必需参数后面」的限制了：
function sayHello(person: string,cat:string = 'lily', nik?:string) {
    return 'Hello, ' + person;
}

console.log(sayHello('user'));


// Void标识函数没有返回,
// never抛出异常的函数，不会有返回值。以及无限循环的函数。
function log(msg: string): void {
    console.log(msg);
}


// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return ''
}

//类型断言
// “尖括号”语法
let userName: any = "Mike";
let nameLenght: number = (<string>userName).length

// as语法, ,  tsx 语法（React 的 jsx 语法的 ts 版）中必须使用 as 类型。
let userName1: any = "Mike";
let nameLenght1: number = (userName1 as string).length;


interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    // 因为不知道传递类型，用这个as可以避免swim不存在
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 类型断言不是类型转换，它不会真的影响到变量的类型。