// 声明文件
// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// <reference /> 三斜线指令

// 语句
declare function jQuery(selector: string):any;
jQuery('#foo');


// 声明文件必需以 .d.ts 为后缀。


// declare namespace
// 不建议再使用 ts 中的 namespac
// 这个会和上面这个命名合并
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}

// 防止命名冲突§
// 暴露在最外层的 interface 或 type 会作为全局类型作用于整个项目中，
// 我们应该尽可能的减少全局变量或全局类型的数量。故最好将他们放到 namespace 下
interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
}
declare namespace jQuery1 {
    function ajax(url: string, settings?: AjaxSettings): void;
}

// types/foo/index.d.ts
// 有以下语法时，文件里禁止声明，在具体文件里引入该文件，即可像全局声明一样使用
// export const nickName: string;
// export function getName(): string;
// export class Animal {
//     constructor(nickName: string);
//     sayHi(): string;
// }
// export enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
// export interface Options {
//     data: any;
// }


// types/foo/index.d.ts
// declare和export 可以混用，一次性export
// declare const name: string;
// declare function getName(): string;
// declare class Animal {
//     constructor(name: string);
//     sayHi(): string;
// }
// declare enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
// interface Options {
//     data: any;
// }
//
// export { name, getName, Animal, Directions, Options };



// 与 namespace 类似，三斜线指令也是 ts 在早期版本中为了描述模块之间的依赖关系而创造的语法。
// 随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的三斜线指令来声明模块之间的依赖关系了。