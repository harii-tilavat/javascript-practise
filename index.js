

// import { Observable } from 'rxjs';
$(document).ready(function () {
    //----------1. What are the different data types present in javascript?.-----------//

    function dataTypeList() {
        function primitive() {
            var a = '1';
            var b = 1
            var c = 4.5;
            var z;
            var symb = Symbol("It is symbol");

            console.log("Datatype of this variable " + a + " Is " + typeof (a))
            console.log("Datatype of this variable " + b + " Is " + typeof (b))
            console.log("Datatype of this variable " + c + " Is " + typeof (c))
            console.log("Datatype of this variable " + z + " Is " + typeof (z))
            console.log("Datatype of this variable symb Is " + typeof (symb))
        }
        // primitive();
        function nonPrimitive() {
            var obj1 = {
                name: "AAA",
                number: 567584580,
                address: "Surat",


            }
            // console.log(obj1.func2)
            var arr = [1, "String", { a: 111, b: 222, c: 333 }, 3, 4, 5]
            console.log(arr)
            console.log(arr[1])
            console.log(arr[2].a)

        }
        nonPrimitive();
    }
    // dataTypeList(); 
    //---------------------2.  Explain Hoisting in javascript.--------------------//

    function hoisting() {


        hoistedVariable = 3;
        console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
        var hoistedVariable;
    }
    // hoisting() 
    //-------------4. Difference between “ == “ and “ === “ operators.-----------//

    function operator() {
        var x = 2;
        var y = "2";
        console.log(x == y)//return true
        console.log(x === y)
    }
    // operator()
    //--------5. Difference between var and let keyword in javascript.--------//
    function varLet() {
        a = 10;
        var a;
        console.log(a)
        b = 10;
        let b;
        console.log(b);//Uncaught ReferenceError: Cannot access 'b' before initialization

    }
    // varLet();

    //-------------6.Explain Implicit Type Coercion in javascript------------//

    function coercion() {
        var x = 5;
        var y = "5";
        console.log(x + y) // Returns "33"
        console.log(x * y) // Returns 25
        var x = 0;
        var y = 23;

        if (x) {
            console.log(x)
        }   // The code inside this block will not run since the value of x is 0(Falsy)  

        if (y) {
            console.log(y)
        }
    }
    // coercion() 

    function logicalOperator() {
        var x = 230;
        var y = "Hello";
        var z = undefined;

        if (x && y) {
            console.log(x && y); // This block runs because x && y returns "Hello" (Truthy)
        }

        if (x || z) {
            console.log(x || z);  // This block runs because x || y returns 220(Truthy)
        }
    }
    ///logicalOperator(); 

    //-------------8. What is NaN property in JavaScript?------------// 

    function Nan() {
        console.log(isNaN("Hello"))  // Returns true
        console.log(isNaN(345))   // Returns false
        console.log(isNaN('1'))  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
        console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
        console.log(isNaN(false)) // Returns false
        console.log(isNaN(undefined)) // Returns true
    }
    // Nan();
    //-------------9. Explain passed by value and passed by reference.------------// 

    function passByValue() {
        var x = 2;
        var y = 234;
        var z = y;

        // Changing the value of y
        y = 23;
        console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
    }
    // passByValue(); 

    //-------------10. What is an Immediately Invoked Function in JavaScript?------------// 
    function selfInvoked() {
        (function () {
            console.log("Hello World! ");
        }
        )();
    }
    // selfInvoked(); 

    //---11.What do you mean by strict mode in javascript and characteristics of javascript strict-mode?--//
    function strictMode() {
        // "use strict";
        var x = 3.14;
        console.log(x)//X is Not defined
        let y = 3.14;
        // delete y;
        console.log(y)//Delete of an unqualified identifier in strict mode.
    }
    // strictMode();
    //-------------12. Explain Higher Order Functions in javascript.------------// 

    function higherOrder(fn) {
        fn();
    }
    // higherOrder(
    //     function () {
    //         console.log("Hello World!!")
    //     }
    // );
    function higherOreder2() {
        return function () {
            return "Do Something! "
        }
    }
    // a=higherOreder2();
    // console.log(a());
    //-------------13. Explain “this” keyword.------------//

    function thisKeyword() {
        var obj = {
            name: "Vivek",
            getName: function () {
                console.log(this.name)
            }
        }

        var Name = obj.getName;
        var obj2 = {
            name: "Akshay",
            Name
        }
        obj2.Name();
    }

    // thisKeyword();
    //-------------15. Explain call(), apply() and, bind() methods. ------------//

    //------------CAll

    function callMethod() {

        function sayHello1(name) {
            return "Hello " + this.name;
        }
        var obj = {
            name: "Sandy"
        }
        // b=sayHello1.call(obj);
        // console.log(b);

        //    a= sayHello1(obj.name)
        //        console.log(a);

        function sayHello2() {
            var person = {
                name: "Sandy",
                getAge: function () {
                    // return this.age ;
                    console.log("Hello " + this.name + " Your age is: " + this.age);
                }
            }
            var person2 = {
                age: 50,
                name: "Harii"

            }
            person.getAge.call(person2);
        }
        // sayHello2()
        function sayHello3(msg) {
            console.log(this.name + " is " + msg);
        }
        obj = {
            name: "Harii "
        }
        // sayHello3.call(obj, " Good Boy");
        function printFullName(msg,msg2){
            console.log(this.name+this.lastName+msg+msg2);
        }
        person1={
            name:"Vivek",
            lastName:"Goswami"

        }
        a =printFullName.bind(person1,["Good Boy","Programmer also"]);
        a();
    }
    // callMethod();

    //----------Apply

    function applyMethod(msg) {
        console.log(this.name + " is " + msg);
    }
    var obj = {
        name: "Harit Bhai "
    }
    // a=applyMethod.bind(obj, "Programmer");
    // a();
    

    //-----------------------------------------------------------------


    //-----------Bind

    //-------------------------------------------------------------------
    // function bindMethod1() {
    //     var bikedetails = {
    //         displayDetails: function (rno, brand) {
    //             return this.name + "Bike Details: " + rno + "," + brand;
    //         }
    //     }
    //     var nm = {
    //         name: "Harit's "
    //     }
    //     a = bikedetails.displayDetails.bind(nm, "1234", "Bullet")
    //     console.log(a())
    // }
    function bindMethod1() {
        var bikedetails = {
            display: function (rno, brand) {
                return `${this.name} Bike Details: ${rno} , ${brand}`
            }
        }
        var person = {
            name: "Harit "
        }
        a = bikedetails.display.bind(person, " 1234 ", " R15")
        console.log(a);


    }
    // bindMethod1();

    //---------------------------------------------------------------
    function bindMethod() {
        const person = {
            name: "Harit",
            lastName: "Tilavat",
            id: 800,
            fullName: function () {
                return "First name: " + this.name + " LastName: " + this.lastName;
            }
        };
        const member = {
            name: "ABCD",
            lastName: "XYZWWWW"

        }

        let full = person.fullName.bind(member);
        console.log(full());
    }
    // bindMethod();
    //-------------17. What is currying in JavaScript? ------------//
    function add(a) {
        return function (b) {
            return a + b;
        }
    }
    // a=add(10)(20)
    // console.log(a);

    function multiply(a, b) {
        return a - b;
    }

    function add(a) {
        return function (b) {
            return a + b
        }
    }
    // a=add(5)(6);
    // console.log(a);
    // var c = currying(multiply);
    // a = c(2)(5)
    // console.log(a)

    function curryning(fn) {
        return function (a) {
            return function (b) {
                return fn(a, b)
            }

        }
    }
    // var cur=curryning(multiply);
    // var cur=curryning(multiply)
    // a=cur(10)(20);
    // console.log(a);

    //-------------19. Explain Scope and Scope Chain in javascript.? ------------//

    function scope() {
        function globalScope() {
            var globalvariable = "Hello World! ";
            function sendMsg() {

                return globalvariable;
            }
            function sendmsg2() {
                return sendMsg();
            }
            a = sendmsg2();
            console.log(a);
        }
        // globalScope();

        function functionScope() {
            // var a=2;
            var multiplyBy2 = function () {
                console.log(a * 2);
            }
        }
        // console.log(a);//Error
        // multiplyBy2();//Error
        function blockScope() {
            {
                let x = 45;
            }
            for (let i = 0; i <= 10; i++) {
                console.log(i);
            }
            console.log(x);//ERROR
        }
        // blockScope();
        // y=24;
        var y = 20;
        x = 67;
        function scopeChain() {
            var x = 667;
            var another = function () {
                console.log(x);
            }
            var another2 = function () {

                console.log(y);
            }
            another2();
        }
        // scopeChain();


    }
    // scope();
    //-------------20. Explain Closures in JavaScript ------------//
    function closures() {
        var Person = function (pName) {
            var name = pName;
            this.getName = function () {
                return name;
            }
        }
        var person = new Person("Neelesh")
        console.log(person.getName());
    }
    // closures();

    function randomFunction() {
        var obj1 = {
            name: "Haritt",
            age: 45
        }
        return function () {
            console.log(obj1.name + " is Awesome! ");
        }
    }
    // var a=randomFunction();
    // a();
    // console.log(a);


    //-------------22. What are object prototypes?------------//
    function objectPrototype() {
        var a = [6, 0, 2];
        a.push(5);
        console.log(a.indexOf(5));
    }
    // objectPrototype();

    //-------------23. What are callbacks?------------//
    function callback() {
        function devideByHalf(n1) {
            console.log(Math.floor(n1 / 2))
        }
        function multiplyBy2(n1) {
            console.log(n1 * 2);
        }
        function operationOnSum(n1, operation) {

            operation(n1);
        }
        operationOnSum(20, devideByHalf);
        operationOnSum(10, multiplyBy2);
    }
    // callback();



    //-------------25. What is memoization?------------//

    function memoization() {

        function add250() {
            var cache = {

            };

            return function (num) {
                if (num in cache) {
                    console.log("Catch Value is: ");
                    return cache[num];
                }
                else {
                    cache[num] = 250 + num;
                    return cache[num];
                }
            }

        }

        // var a=add250();
        // console.log(a(10));
        // console.log(a(10));


    }
    // memoization();
    //-------------26. What is recursion in a programming language?------------//

    function recursion() {
        function add(num) {
            if (num <= 0) {
                return 0;
            }
            else {
                return num + add(num - 1);
                //  5+add(4);
                //  5+4+add(3);
                //  5+4+3+add(2);
                //  5+4+3+2+add(1);
                //  5+4+3+2+1+add(0);
                //  5+4+3+2+1+0;
            }
        }
        a = add(5);
        console.log(a);
    }
    // recursion();

    //-------------27. What is the use of a constructor function in javascript?------------//
    function constructer() {
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        var person1 = new Person("harit", 20, "Male");
        console.log(person1);
        var person2 = new Person("ABC", 40, "Female");
        console.log(person2);
    }
    // constructer();
    //-------------29. Which method is used to retrieve a character from a certain index?------------//

    function charAt() {
        var str = "HaritTilavat"
        console.log(str)
        console.log(str.charAt(11 - 10))
    }
    // charAt();
    //-------------32. What are arrow functions?------------//
    a = 10;
    b = 20;
    var arrowAdd = () => this;
    // console.log(arrowAdd());
    // console.log(arrowAdd);
    function arrowFunction() {
        var sum = (a, b) => a + b;
        var sub = (a, b) => a - b;
        var mul = (a, b) => a * b;
        var div = (a, b) => Math.floor(a / b);

        // console.log(sum(10,10));
        // console.log(sub(10,10));
        // console.log(mul(10,10));
        // console.log(div(10,10));
        var a, b;
        a = 10; b = 20;
        var obj1 = {
            valueOfThis: function () {
                return this;
            }
        }
        var obj2 = {
            valueOfThis: () => {
                return this;

            }
        }
        console.log(obj1.valueOfThis());
        console.log(obj2.valueOfThis());
    }
    // arrowFunction();
    //-------------35. What is the rest parameter and spread operator?------------//

    function restParameter() {
        function extract(a, b, ...args) {
            return args[1];
        }
        // a=extract(1,"Harit",5,6,"sdrfg");
        // console.log(a);

        function extract2(...args) {
            var sum = 0;
            for (var i = 0; i < args.length; i++) {
                sum = sum + args[i];
            }
            return sum;
        }
        // a=extract2(1,2,3,4,5);
        // console.log("Sum of Arguments is: ",a);

        function spreadOperator() {
            function addNumber(n1, n2, n3, n4) {
                return n1 + n2 + n3 + n4;
            }
            let four = [1, 2, 3, 4];

            addNumber(...four);
            let array = [5, 6, 7, 8];
            let clonedArray = [...array];
            // console.log(array);
            // console.log(clonedArray);//5,6,7,8

            let obj1 = {
                x: "Hello",
                y: "Byee"
            }
            let clonedObj = { ...obj1 }
            console.log(obj1);
            // console.log(clonedObj);

            let obj2 = {
                a: "Yes",
                b: "No"
            }
            let mergeObj = { ...obj1, ...obj2 };
            console.log(mergeObj);

        }
        spreadOperator();
    }
    // restParameter();
    //-------------37. What is the use of promises in javascript?------------//

    function promise() {
        function sumOfNumber(...args) {

            var sum = 0;
            return new Promise((resolve, reject) => {
                if (args.length > 3) {
                    reject("It should be not grater then 2");
                }
                else {
                    for (i = 0; i < args.length; i++) {
                        sum += args[i];
                    }
                    resolve("Sum is Calculated! " + sum);
                }
            })

        }
        sumOfNumber(2, 3, 4, 3)
            .then(result => console.log(result))
            .catch(a => console.log(a));

    }
    // promise();
    function promise2(){
        console.log("Start!");
        const p1=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                
            },3000)
        })
        p1.then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        })
        console.log("End");
    }
    // promise2();
    function observableAndPromise(){
        function promise(){
            const pr=new Promise((resolve,reject)=>{
                // var msg=false;
                console.log("Data is Fetching! ");
                setTimeout(()=>{
                    $.get("https:/jsonplaceholder.typicode.com/posts",function(data){
                        resolve(data+"Fetched");
                    }).fail(err=>{
                        reject("fail to load JSON. ");
                    })
                },4000)
            });
            pr.then((data)=>{
                console.log(data);
            }).catch((err)=>{
                console.log(err);
            });
        }
        promise();
        function obs(){
            const abs= new Observable((observer)=>{
                console.log("Obs Done! ");
                setTimeout(()=>{
                    observer.next("4 second observer");
                },2000)
            });
            setTimeout(()=>{
                obs.subscribe(console.log)
            },4000);
        }
        // obs();
        // console.log("Helllllo");

    }
    observableAndPromise();
    //-------------38. What are classes in javascript ?------------//

    function classes() {
        class Student {
            constructor(name, rollNumber, m1, m2, m3) {
                this.name = name;
                this.rollNumber = rollNumber;

                this.m1 = m1;
                this.m2 = m2;
                this.m3 = m3;
            }

            getdetails() {
                var sum = this.m1 + this.m2 + this.m3;
                var per = sum / 3;

                return `name: ${this.name},Roll No: ${this.rollNumber},Marks1: ${this.m1} ,Marks2: ${this.m2},Marks3: ${this.m3},Total: ${sum},Percentage: ${per}`;

            }
        }
        // let s1=new Student("Harit",441,99,98,97);
        // console.log(s1.getdetails());
    }
    // classes();
    //-------------39. What are generator functions?------------//

    function* genF() {
        yield 1
    }
    // a=genF();
    // console.log(a.next())
    // console.log(a.next())

    function* genFunc() {
        let count = 0
        for (let i = 0; i < 2; i++) {
            count++
            yield i
            console.log(i)
        }
        return count;
    }
    // a = genFunc();
    // console.log(a.next())
    // console.log(a.next())
    // console.log(a.next())

    // console.log(a)

    //-------------40. Explain WeakSet in javascript.------------//

    function weakSet() {
        const set1 = new Set([1, 2, 3, 4, 5])
        // const set2=new WeakSet([6,7,8])

        // console.log(set2);

        let obj1 = {
            // msg:"Hello World! "
        }
        obj2 = {}

        const set3 = new WeakSet([obj1]);
        set3.add(obj2)
        console.log(set3.has(obj1));
    }
    // weakSet();

    function weakSet2() {
        const ws = new WeakSet();
        const foo = {

        }
        const bar = {

        }

        ws.add(foo);
        ws.add(bar);
        console.log(ws);
        // console.log(foo);
        // console.log(bar);
        //     console.log(ws.has(foo));
        //     ws.delete(foo);
        //     console.log(ws.has(foo));
        // 
    }
    // weakSet2();

    //-------------42. Explain WeakMap in javascript------------//
    function weakMap() {
        const map1 = new Map();
        map1.set("value", 1);
        map1.set("value", 2);
        map1.set("value", 3);
        map1.set("value", 4);
        console.log(map1);

        const map2 = new WeakMap();

        // map2.set("Value",2.3);

        let obj = {
            name: "Vivek"
        }
        const map3 = new WeakMap();

        map3.set(obj, { age: 23 });



    }
    // weakMap();
    //-------------43. What is Object Destructuring?------------//
    function objectDes() {
        const classDetails = {
            bench: 50,
            duster: 2,
            teacher: 2
        }
        const { bench: classBench, duster: classDuster, teacher: classTeacher } = classDetails;
        console.log(classBench);
        console.log(classDuster);
        console.log(classTeacher);


    }
    // objectDes();
    function arrayDes() {
        const array = [1, 2, 3, 4, 5];
        const [first, sec, third, four] = array;


    }
    // arrayDes();

    //-----------------------------45. What is a Temporal Dead Zone?----------------------------//
    function tempDead() {
        x = 10;
        let x;//Error
        //When we access a variable before initilizing that is called temporal dead zone
    }
    // tempDead();

    //-----------------46.  Different Between Pass By value and Pass By references---------------------//
    function passAndReference() {
        function PassByValue(a, b) {
            let temp;
            temp = b;//temp=2
            b = a;//b=1
            a = temp;//a=2
            console.log(`Inside pass by value Function: A=${a} B=${b}`);

        }
        // let a = 1;
        // let b = 2;
        // console.log(`before Calling pass by value Function: A=${a} B=${b}`);
        // PassByValue(a, b);
        // console.log(`After Calling pass by value Function: A=${a} B=${b}`);

        function passByReference(obj) {
            let temp;
            temp = obj.a;//10
            obj.a = obj.b;//20
            obj.b = temp;//10

            console.log(`Inside pass by value Function: A=${obj.a} B=${obj.b}`);
        }
        let obj = {
            a: 10,
            b: 20
        }
        console.log(`before Calling pass by value Function: A=${obj.a} B=${obj.b}`);

        passByReference(obj);
        console.log(`before Calling pass by value Function: A=${obj.a} B=${obj.b}`);


    }

    // passAndReference();
    //-----------------53. Guess the outputs of the following codes:---------------------//

    function guessOutput() {
        function func1() {
            setTimeout(() => {
                console.log(x)
                console.log(y)
            }, 1000);
            var x = 2;
            var y = 12;
        }
        // func1();
        function func2() {
            for (var i = 1; i < 3; i++) {
                setTimeout(() => console.log(i), 2000);
            }

        }
        func2();

    }
    // guessOutput();

    //-----------------53. Guess the outputs of the following codes:---------------------//
    function guessOutput2() {
        let x = {};
        let y = { name: "Rohan" };
        let z = { name: "Vivek" }
        x[y] = { name: "Mitesh" }
        x[z] = { name: "Rahul" }
        console.log(x[z]);
    }
    // guessOutput2();

    function runFunc() {
        console.log("1" + 1);
        console.log("A" - 1);
        console.log(2 + "-2" + "2");
        console.log("Hello" - "World" + 78);
    }
    // runFunc();

    //-----------------56. Guess the outputs of the following code:---------------------//
    function guessOutput56() {
        let hero = {
            powerLevel: 99,
            getPower() {
                return this.powerLevel;
            }
        }
        let getPower = hero.getPower;
        let hero2 = {
            powerLevel: 20
        }

        console.log(getPower());
        console.log(getPower.apply(hero2));
    }
    // guessOutput56();
    function code2() {
        const a = function () {
            console.log(this);
        }
        const b = {
            func1: function () {
                console.log(this);
            }
        }
        const c = {
            func2: () => {
                console.log(this);
            }
        }
        b.func1();
        c.func2();
    }
    // code2();

    function code3() {
        const b = {
            name: "Vivek",
            f: function () {
                var self = this;
                console.log(this.name);
                (function () {
                    console.log(this.name);
                    console.log(self.name);
                })();
            }
        }
        b.f();

    }
    // code3();
    //----------------57. Guess the outputs of the following code:---------------------//

    function q57() {
        function bigFunc(element) {
            let newArray = new Array(700).fill('❤');
            return newArray[element]
        }
        a = bigFunc(599);
        console.log(a);
        b = bigFunc(699);
        console.log(b);

        function code2() {
            function randomFunc() {
                for (let i = 0; i < 2; i++) {
                    setTimeout(() => console.log(i), 1000);
                }
            }
            randomFunc();
        }
        code2();
    }
    // q57();
    //-----------------Write the code given If two strings are anagrams of one another, then return true.---------------------//
    function q61() {
        var firstWord = "Deepak";
        var secondWord = "Aman";

        // isAnagram(wordOne, wordTwo); // true

        function isAnagram(one, two) {
            //Change both words to lowercase for case insensitivity..
            var a = one.toLowerCase();
            var b = two.toLowerCase();

            // Sort the strings, then combine the array to a string. Examine the outcomes.
            a = a.split("").sort().join("");
            b = b.split("").sort().join("");

            return a === b;
        }
        isAnagram("Hello", "World");
    }
    // q61();//ERROR
    //-----------------62. Write the code to find the vowels---------------------//

    function q62() {
        function findVovels(str) {
            var vovels = ['a', 'e', 'i', 'o', 'u'];
            var vov = ""
            var cons = ""
            for (let char of str) {
                if (vovels.includes(char)) {

                    vov = vov + char + ", ";
                }
                else {

                    cons = cons + char + ", ";
                }
            }
            console.log("Total vovels is: " + vov);
            console.log("Total Consonent is: " + cons);

        }
        findVovels("abcdaeio");
    }
    // q62();
    //-----------------63. What is the output of the following code?---------------------//

    function q63() {
        let obj = {
            id: "1",
            name: "user22",
            age: "26",
            work: "programmer"
        };
        // console.log(obj);
        console.log(Object.keys(obj));
        console.log(Object.values(obj));
        console.log(Object.entries(obj));
    }
    // q63();

    //-----------------64. What is the output of the following code?---------------------//

    function q64() {
        const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for (let j = 0; j < 10; j++) {
            // console.log('test - 1 ==>', i, b)
            setTimeout(() => console.log(b[j]), 1000)
        }
        for (var i = 0; i < 10; i++) {
            // console.log('test', i, b)
            setTimeout(() => console.log(b[i]), 1000);
        }
        console.log('test',i, b[i-2])
    }
    // q64();
    


});
    

