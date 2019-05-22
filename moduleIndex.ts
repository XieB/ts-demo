import { IPtest, xx } from './module/xx'

xx()

class Aclass implements IPtest {
    name: string = 'xx'
    sayName(): void {
        console.log(this.name)
    }
}

let aa = new Aclass()
aa.sayName()