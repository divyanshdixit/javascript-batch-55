// object literals 

// methods (functions)
// properties

// var name = "lalit";

// var city =  'merut';

// console.log(name, city);

var obj2 = {
    name: "lalit", // props string, number, b, null, array
    city: "merut",
    printName: function(){console.log('first')}
}

// accessing the props, methods of obj: objectName.propName, 

console.log(obj2.name, obj2.city, obj2.printName())

// change the value of props:

obj2.name = 'divyansh';
obj2.printName = function(){console.log('second')}

// add new props:
obj2.age = 28;

// console.log(obj2, obj2.printName());

// delete props: delete objname.propname

delete obj2.age;
console.log(obj2);



// deep copy and shallow copy:

var a = 10;
var b = a; // 10
b = 20;
console.log(b, a)

// reference/address 

var o1 = { // object 2000
    name: 'divyansh'
}

var o2 = o1; // {name: 'divyansh'} // shallow copy 2000

o2.name = 'lalit';

// console.log(o2, o1);

// object to string => JSON.stringify()
// string to object => JSON.parse(string)

var o2 = JSON.parse(JSON.stringify(o1)) // deep copy 3000
o2.name = 'lalit';
console.log(o2, o1);

// reuse of code => function => function call => functionName()