
// all primitive data types are stored into stack 

let myAge = 12
let yourAge = myAge

yourAge = 32
console.log(myAge); // print 12
console.log(yourAge); // print 32

// Conclusion in primitive data types memory is allocated into stack and always a copy of the value is passed when it is reassigned

//++++++++++++++++++++++++++++++++++++++++++++++++++++

//all non-primitive data types are allocated into Heap Memory

let obj = {
    "name" : "Prafull",
    "age" : 20
}

let obj2 = obj // reference(Address) of obj to will be passed  

obj2.name = "Pandey" // when we change it , the data at this reference (Address) will be also changed and hence obj will also change

console.log(obj2);
console.log(obj);
//both will give same output

