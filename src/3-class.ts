// 定义类
class Person1{
    name:string
    age:number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    run() {
        console.log('run')
    }
}

const person1 = new Person1('kill',18)
console.log(person1)

// 类的成员修饰符
// 类的成员修饰符可以有以下几种，
// 参数或方法
// public， 
// private， 
// protected

// 参数属性
// readonly，只允许出现在属性声明或索引签名或构造函数中。
// static

// 1、staticc
class People1 {
    static userName:string = 'Kobe'
    constructor() {}
}
let p1 = new People1();

// console.log(p1.userName) // 会报错，不能通过实例访问
console.log(People1.userName); // Kobe


// 2、public
class Foo1 {
    constructor(public name1: string){}
}

let f1 = new Foo1('Mike');
// 可以直接访问name属性
console.log(f1.name1); // Mike


// 3、存取器get/set
class Student{
    private _userName: string = '';
    get userName() {
        return this._userName
    }
    set userName(value) {
        this._userName = value;
        console.log('setter: ' + value);
    }
}

let s1 = new Student();
s1.userName = 'Tom'; // setter: Tom
console.log(s1.userName); // Tom


// 4、抽象类，就是只能被继承，不能实例化的类
abstract class People4{
    abstract task(): void; // 必须被实现
    sayHi(): void {
        console.log('Hi');
    }
}

class Student4 extends People4 {
    constructor() {
        super();
    }

    task(): void {
        console.log('learing');
    }
}

// 5、类和接口的关系
// 类可以继承、接口可以继承
// 类和接口之间最好不要继承
// 使用关键字implements来实现接口继承
// 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。
// 接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {
        console.log(h, m, this.currentTime);
    }
}

let clock = new Clock(8, 10);
