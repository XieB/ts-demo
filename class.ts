//基本用法
class site {
    private myName: string = 'xx'
    protected myName1: string = 'bb'
    public myName2: string
    constructor(name2: string) {
        this.myName2 = name2
    }
    sayName(): void {
        console.log(this.myName, this.myName1, this.myName2)
    }
}

let xx = new site('cc')
xx.sayName()

//继承 extends

//继承类的方法重写
class PrinterClass {
    Area: number
    constructor(area: number) {
        this.Area = area
    }
    doPrint(): void {
        console.log("父类的 doPrint() 方法。")
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint() // 调用父类的函数
        console.log("子类的 doPrint()方法。")
        console.log(this.Area)
    }
}
let aa = new StringPrinter(10)
aa.doPrint()

//static 修饰符
class StaticMem {
    static num: number;

    static disp(): void {
        console.log("num 值为 " + StaticMem.num)
    }
} 
StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法

//instanceof运算符

//类继承接口
interface IPtest {
    name: string
}

class Itest implements IPtest {
    name: string
}