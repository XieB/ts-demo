//变量声明
//单行注释
/*
多行注释
 */
let myAny: any = '111'
let myAny1: number | null | undefined

let num: number = 5
let message: string = 'hello word!' + "这是双引号字符串" + `这是反引号字符串${num}`
let flag: boolean = true

let arr: number[] = [1, 2]
let arr1: Array<number> = [3, 4]

let x: [number, string]
x = [1, '1']

enum Color {Red, Green, Blue}
let c: Color = Color.Blue
console.log(c)    // 输出 2

//void 用来表示方法没有返回值
function fun(): void {
    console.log('aaa')
}

//null never undefined
