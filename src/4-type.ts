// 类型别名用来给一个类型起个新名字。
// 类型别名常用于联合类型。

type LiteralS = 'large' | 'normal' | 'small';
type LiteralN = 9;
type LiteralB = true;
type LiteralBC = { name: string };
type LiteralBD = { nick: string };
type FlyableAnimal = LiteralBD & LiteralBC; // { name: string, nick: string }

// 基础类型
type S = string;

// 函数
type F = (flag: boolean) => void;

// 对象
type O = { x: number; y: number; };

// tuple
type T = [string, number];

// 1、type、interface
// 最主要的区别就是 type 可以进行“类型编程”，interface 不行。
// interface 能定义的类型比较局限，就是 object/function/class/indexable：

// object
interface Point4 {
    x: number;
    y: number;
}
const p4: Point4 = { x: 1, y: 2 };

// function
interface Add {
    (a: number, b: number): number;
}
const add: Add = (x, y) => x + y;

// class
interface ClockConstructor1 {
    new (hour: number, minute: number): ClockInterface1;
}
interface ClockInterface1 {
    tick(): void;
}
const Clock1: ClockConstructor1 = class Clocke implements ClockInterface1 {
    constructor(hour: number, minute: number) { return this; }
    tick() {}
}
const c = new Clock1(1, 2);
c.tick();

// indexable
interface StringArray {
    [index: number]: string;
}
interface NumberObject {
    [key: string]: number;
}
const s10: StringArray = ['a', 'b'];
const o10: NumberObject = { a: 1, b: 2 };

// 扩展
interface Window {
    g_config: {
        locale: 'zh_CN' | 'en_US';
    };
}



// keyof
interface Sizes {
    large: string;
    normal: string;
    small: string;
    x: number;
}

// 获取对象的属性值
type Size = keyof Sizes; // 'large' | 'normal' | 'small' | 'x'
// 反向获取对象属性的类型
type SizeValue = Sizes[keyof Sizes]; // string | number
// keyof any 可以理解为能作为“索引”的类型
type K = keyof any; // string | number | symbol