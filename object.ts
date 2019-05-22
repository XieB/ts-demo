//有几个要点要留意下

//Typescript 中的对象必须是特定类型的实例
var sites = {
    site1: "xxx",
    sayHello: function () { } // 类型模板,必须有,否则下面的代码会报错
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();