// 可以直接使用字面量进行类型声明，类似于声明一个常量
let a: 10
a = 10
// a = 11  此行代码会报错

// 进行类型声明时可以通过"|"来连接多个类型或字面量(联合类型)
let b: boolean | string
b = true
b = 'hello'

let c: "male" | "famale"
c = "male"
c = "famale"

// any表示任意类型，相当于原生JS，关闭了这个变量的类型检测，尽量避免使用any
let d: any
d = 10
d = 'hello'

// unknown表示未知类型的值,
let e: unknown
e = 10
e = 'hello'

// unknown和any的区别
let s: string
// s = d  any类型的变量可以赋值给任意其他变量
// s = e  unknown类型的变量只能赋值给unkonwn类型的变量，此行代码会报错

// 如果想要赋值给其他类型的变量必须要进行类型判断或者进行类型断言
if(typeof e === "string") {
    s = e
}
// 类型断言，告诉解析器e的类型为string
s = e as string // 第一种语法
s = <string>e // 第二种语法

// void表示为空，一般用于设置函数没有返回值
function fn1(): void {
    // return 123  此行代码会报错
}

// never表示永远不会返回结果(对比之下空也是一种返回值，never连空都不会返回)
function fn2(): never {
    throw new Error('报错了') // 抛出一个错误，一旦代码报错那下面的代码就不会执行，就没有返回值了
}