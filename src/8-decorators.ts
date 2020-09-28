// 装饰器
// (也叫 "注解")就是对一个 类/方法/属性/参数 的装饰。它是对这一系列代码的增强，并且通过自身描述了被装饰的代码可能存在的行为改变。
// 装饰器是实验性特性，所以要在 tsconfig.json 里启用这个实验性特性

// 声明一个装饰器，第三个参数是 "成员的属性描述符"，如果代码输出目标版本(target)小于 ES5 返回值会被忽略。
const validate = function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原来的方法
    let method = descriptor.value
    // 重写原来的方法
    descriptor.value = function (newValue: string) {
        // 检查是否是空字符串
        if (!newValue) {
            throw Error('name is invalid')
        } else {
            // 否则调用原来的方法
            method.call(this, newValue)
        }
    }
}

class User {
    name: string
    id: number
    constructor(name:string, id: number) {
        this.name = name
        this.id = id
    }

    // 调用装饰器
    @validate
    changeName (newName: string) {
        this.name = newName
    }
}

//
// class User {
//     name: string
//
//     @validateString
//     set name (@required name: string) {
//         this.name = name
//     }
// }



// 这是一个装饰器工厂，在外面使用 @god() 的时候就会调用这个工厂
function god(name: string) {
    console.log(`god(): evaluated ${name}`)
    // 这是装饰器，在 User 生成之后会执行
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        // propertyKey: 成员的名字
        // descriptor: 成员的属性描述符 {value: any, writable: boolean, enumerable: boolean, configurable: boolean}
        console.log('god(): called')
    }
}

class User2 {
    @god('test')
    test () { }
}


// 装饰器能装饰在类、方法、属性和参数上，但不能只装饰在函数上！
const required = function (target:any, propertyKey: string, parameterIndex: number) {
    // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    // propertyKey: 成员的名字
    // parameterIndex: 参数在函数参数列表中的索引
}

class User3 {
    private _name : string = '';
    //用在参数上
    set name(@required name : string) {
        this._name = name;
    }
}