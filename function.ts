//可选参数
function fun(x: number, y?: number): number {
    if (y) {
        return x + y
    }
    return x
}

//默认参数
function fun1(x: number, y: number = 0.5): number {
    return x + y
}

//剩余参数
function fun2(x: number, ...y: number[]): string {
    return x + y.join(" ")
}

//函数重载(不用为了对不同的参数类型或参数个数，而写多个函数), 从TypeScript 1.4开始，可以使用联合类型删除对重载的需要
function fun3(s: string): void
function fun3(s: number, n: string): void
function fun3(s: any, y?: string): void {
    console.log(s, y, 'aa')
}
fun3('33')
fun3(1, '2')

function fun4(s: string|number, n?:string): void {
    console.log(s, y, 'aa')
}