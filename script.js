// // // // var newArr=[]
// // // // var obj ={
// // // //     children:[1,2,3],
// // // //     name:'John',
// // // //     attr: {
// // // //         children:[4,5,6],
// // // //         ch:{
// // // //             jj:[7,8,9]
// // // //         }
// // // //     }
// // // // }

// // // // function findArr(objj){
// // // //     for (const key in objj) {
// // // //         if(objj[key] instanceof Array){
// // // //             for (const iterator of objj[key]){
// // // //                 newArr.push(iterator)
// // // //             }
// // // //         }else if(objj[key] instanceof Object){
// // // //             findArr(obj[key])
// // // //         }
// // // //     }
// // // // }

// // // // findArr(obj)
// // // // console.log(newArr);


// // // // const obj = {
// // // //     name: 'Grig',
// // // //     lname:'Maghzanyan'
// // // // }
// // // // Object.freeze(obj)
// // // // obj.name= "Suro"
// // // // console.log(obj);




// // // // console.log(a);
// // // // var a = 5

// // // // console.log(b);
// // // // let b = 5

// // // // console.log(c);
// // // // const c = 5




// // // // var parz = []

// // // // for(var i = 0;i<=300;i++){
// // // //     var arr = []
// // // //     for(var j = 1;j<=i;j++){
// // // //         if(i%j==0) arr.push(j) 
// // // //     }
// // // //     if(arr.length == 2){
// // // //         console.log(i);
// // // //     }
// // // // }


// // // // function func(){
// // // //     var div = document.createElement('div')
// // // //     document.body.appendChild(div)
// // // //     div.style.backgroundColor = 'yellow'
// // // //     div.style.width = '200px'
// // // //     div.style.height = '200px'
// // // //     div.style.margin = '10px'
// // // // }

// // // // Տպել զանգվածի միջի թվերի գումարը 
// // // // var arr = [[[[1, 2], [3, 4]]], [[[5, 6], [7, 8]]]]; 
// // // // for (var i = 0;i<arr.length;i++){
// // // //     for(var j = 0;j<arr[i].length;j++){
// // // //         for(var k = 0;k<arr[i][j].length;k++){
// // // //             for(var m = 0;m<arr[i][j][k].length;m++){
// // // //                 console.log(arr[i][j][k][m]);
// // // //             }
// // // //         }
// // // //     }
// // // // }











































// // // // class Papi {
// // // //     constructor(obj) {
// // // //         this.name = obj.name
// // // //         this.age = obj.age
// // // //     }
// // // //     voice(){
// // // //         console.log('red');
// // // //     }
// // // // }
// // // // // const papi = new Papi({name:"Vruyr", age:54})
// // // // // console.log(papi);
// // // // class Txa extends Papi{
// // // //     constructor(obj){
// // // //         super(obj);
// // // //         this.work = obj.work
// // // //     }
// // // //     voice() {
// // // //         console.log(this.name + " ordered coffee")
// // // //     }
// // // // }
// // // // const erexa = new Txa({name: "John", age: 7,work:'driver'})
// // // // console.log(erexa)
// // // // erexa.voice()
// // // //super@ hnaravorutyun e talis mer Txa constructorin jarangelu kam vercnelu arjeqner ir cnox constructoric




// // // class User {
// // //     constructor(options) {
// // //         this.name = options.name
// // //         this.age = options.age
// // //         this.gender = options.gender
// // //     }
// // //     sayInfo(){
// // //         console.log(this.name + " " + this.age + " es " + this.gender + " em ")
// // //     }
// // // }
// // // // const User1 = new User({name: "Hayk",age: 40, gender: "txa"})
// // // // console.log(User1.age)
// // // // User1.sayInfo()

// // // class Girl extends User{
// // //     constructor(options) {
// // //         super(options);
// // //         this.work = options.work
// // //         this.hair = options.hair
// // //     }
// // //     sayInfo() {
// // //         console.log("Es " + this.name + " em ev ashxatum em " + this.work + " um ev unem " + this.hair + " mazer")
// // //     }
// // // }

// // // const girl1 = new Girl({
// // //     name: "Mane",
// // //     age: 21,
// // //     gender: "axjik",
// // //     work: "assistent",
// // //     hair: "erkar"
// // // })
// // // const girl2 = new Girl({
// // //     name:'Arpi',
// // //     age:26,
// // //     gender:'axjik',
// // //     work:'baker',
// // //     hair:'karch'
// // // })
// // // console.log(girl1.work)
// // // console.log(girl1)
// // // girl1.sayInfo();

// // // console.log(girl2.work)
// // // console.log(girl2)
// // // girl2.sayInfo();

















// // // // PRIVATE
// class ClassWithPrivateMethod {
//     #privateMethod() {
//       return "hello world";
//     }
  
//     getPrivateMessage() {
//       return this.#privateMethod();
//     }
//   }
  
//   const instance = new ClassWithPrivateMethod();
//   console.log(instance.getPrivateMessage());
//   console.log(instance.privateMethod());// sxal
// //   hello world




// class ClassWithPrivateField {
//     #privateField;
  
//     constructor() {
//       this.#privateField = 42;
//     }
//   }
//   class SubClass extends ClassWithPrivateField {
//     #subPrivateField;
  
//     constructor() {
//       super();
//       this.#subPrivateField = 23;
//     }
//   }  
//   const a = new SubClass();
//   console.log(a);

// // // for(var i = 0;i < 10;i++){
// // //   console.log(i); // 0-9 logum
// // // }

// // // for(var i = 0;i >= -10; i--){
// // //   console.log(i);
// // // }

// // // var i = 2
// // // while(i<10){
// // //   console.log(i);
// // //   i++
// // // }


// // // 
// // // var obj = {
// // //   name:'Tigran',
// // //   surname:'Grigoryan',
// // //   age:27,
// // //   azg:'hay'
// // // }
// // // for(var key in obj){
// // //   console.log(key);
// // //   console.log(obj[key]);
// // // }




// // var tiv = 16
// // var baj = []
// // for(var i = 1;i <= tiv;i++){
// //   if(tiv % i == 0){
// //     baj.push(i)
// //   }
// // }
// // if(baj.length == 2){
// //   console.log('parz e');
// // }else{
// //   console.log('parz che');
// // }








// // var arr = [12,67,34,1,6,3,43]

// for(var i = 0; i <= 1000;i++){
//   var arr = []
//   for(var j = 1;j<=i;j++){
//     if(i%j == 0){
//       arr.push(j)
//     }
//   }
//   if(arr.length==2){
//     console.log(i);
//   }
// }

// function aa(){ //1in ev himnakan dzev
//   // function declaration
// }

// ()=>{} // arrow function

// const func = function(){
//   // function expression
// } 
// func()



// const func = function(a,b){
//   return a + b
// }
// console.log(func(50,40));

// function* f(){
//   yield 49;
//   yield 34;
//   yield 67;
// }
// var func = f()
// console.log(func.next());
// console.log(func.next());
// console.log(func.next());




// function* generator(tiv){
//   while(tiv<10){
//     yield tiv;
//     tiv++
//   }
// }
// var func = generator(5)
// console.log(func.next());
// console.log(func.next());
// console.log(func.next());
// console.log(func.next());
// console.log(func.next());
// console.log(func.next());



// 5! = 1*2*3*4*5

// function factorial(x){
//   if(x === 0){
//     return 1
//   }
//   return x * factorial(x-1)
// }
// console.log(factorial(5));

// function a(){
//   return a()
// }
// a()

// var tiv = 5
// var factorial = 1

// for(var i = 1;i<=tiv;i++){
//   factorial *= i
// }
// console.log(factorial);










var allUsers = [];
var timer = false;

function User(anun, azganun, email, pass) {
    this.name = anun;
    this.lastName = azganun;
    this.email = email;
    this.password = pass;
}

var anun, azganun, email, password;

function regist() {
    function anunf() {
        anun = prompt('xndrum enq nermucel dzer anun@');
        if (anun === '') {
            alert('anun@ chi kara datark lini');
            return anunf();
        }
    }
    function azganunf() {
        azganun = prompt('xndrum enq nermucel dzer azganun@');
        if (azganun === '') {
            alert('azganun@ chi kara datark lini');
            return azganunf();
        }
    }
    function emailf() {
        email = prompt('xndrum enq nermucel dzer email@');
        if (email === '') {
            alert('email@ chi kara datark lini');
            return emailf();
        }
        else {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {
                alert('chi hamapatasxanum emaili standartnerin');
                return emailf();
            }
        }
    }
    function passwordf() {
        password = prompt('xndrum enq nermucel dzer password@');
        if (password.length < 7) {
            alert('password@ chi kara 7 nishic pakas lini');
            return passwordf();
        }
    }
    anunf();
    azganunf();
    emailf();
    passwordf();
    var oneUser = new User(anun, azganun, email, password);
    allUsers.push(oneUser);
    console.log(allUsers);
    var isRegYes = confirm('cankanum eq noric grancvel ?');
    if (isRegYes) {
        return regist();
    }
    else {
        alert('der tvyalner@ bernvum en xndrum enq spasel 5 varkyan');
        timer = true;
    }
}

var inter = setInterval(function () {
    if (timer) {
        clearInterval(inter);
        setTimeout(() => {
            alert('der tvyalner@ bernvecin verjaca shnorhakalutyn gracvelu hamer');
            function loginf() {
                var isTrue = true;
                var login = prompt('greq dzer email@');
                var parol = prompt('greq dzer password@');
                for (var i = 0; i < allUsers.length; i++) {
                    if (allUsers[i].email == login && allUsers[i].password == parol) {
                        isTrue = false;
                        document.write(allUsers[i].name, '   ', allUsers[i].lastName);
                        break;
                    }
                }
                if (isTrue) {
                    alert('dzer grvac email@ kam password@ sxal e');
                    return loginf();
                }
            }
            loginf();
        }, 5000);
    }
}, 1000)

regist();