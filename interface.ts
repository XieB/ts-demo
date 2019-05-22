//基本用法
interface IPerson {
    firstName: string,
    sayHi: () => string
}

let customer: IPerson = {
    firstName: 'xx',
    sayHi: (): string => {
        return '111'
    }
}

//联合类型
interface IPerson1 {
    sayHi: string[] | string | (() => string)
}

//数组
interface IPerson2 {
    [index: number]: string,
}
interface IPerson3 {
    [index: string]: number
}

//继承
interface Person {
    age: number
}

interface Dog {
    height: number
}

interface Musician extends Person, Dog {
    instrument: string
}
let drummer = <Musician>{
    age: 18,
}
let myTest: Musician = {
    age: 18,
    height: 185,
    instrument: '11'
}