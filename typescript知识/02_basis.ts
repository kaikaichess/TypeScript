// 声明一个变量a，同时指定它的类型为number，在以后的使用过程中a的值只能是数字
let a: number
a = 10
// a = 'hello' 此行代码会报错


// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型监测
let b = true
// b = 1 此行代码会报错

// 指定函数参数和函数返回值的数据类型
function sum(a: number, b: number): number {
    return a + b
}
// sum(123, '456')  此行代码报错