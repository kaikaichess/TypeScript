// 声明一个对象
let f: object // 这种方法不常用
let g: { id: number } // 常用这种方法，因为这样不仅可以约束b为一个对象，还可以约束对象中属性的数据类型
let h: { id: number, name?: string } // ?表示name属性可有可无
let i: { id: number, [propName: string]: any } // [propName: string]表示属性名为任意字符串，any表示属性值为任意数据类型

// 声明一个函数，并且指定函数参数和返回值的数据类型
let j:(x: number, y: number) => number

// 声明了一个string类型的数组
// let f: Array<number>
let k: string[]
k = ['a', 'b', 'c']
// f = [1, 2, 3] 此行代码会报错

// 元祖(tuple)，就是固定长度的数组
let l: [string, string] //定义了一个长度为2，且数组内元素都是数字类型的元祖
// l = ['hello'] 此行代码会报错

// 枚举(enum)
enum Gender{
    Male,
    Female
}
let m: { name: string, gender: Gender }
m = {
    name: '孙悟空',
    gender: Gender.Male
}

// 连接两个对象，可以用于对象合并
let n: { name: string } & { age: number} 
n = {
    name: '孙悟空',
    age: 18
}

// 类型的别名，可以简化类型的使用
type myType = string
let o: myType // 这样l的类型就是string
type numberType = 1 | 2 | 3 | 4 | 5
let p: numberType
p = 1