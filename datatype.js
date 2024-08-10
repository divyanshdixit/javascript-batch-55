// primitive  => can not be change, it doesn;'t have own props , methods


// string => '10', "-10"
// number => int, float, -ve, 10, 10.5, -10
// boolean => true and false
// undefined => undefined


// non-primitive  => can be change, they have own props, methods


// object => object
// array => special kind of object
// null => object

// address - reference 

var a = 10; // 1000
a = 20; // 1001

var details = { // 1010
    name:'divyansh',
    age: 28
}

details.name = 'ishi'

console.log(details);

