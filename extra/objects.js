// (1). Object.assign()
/* this method is used to assign the target to a source 
or overwrites the target and return target value*/

// For example:
 const target = {a: 14, b: 5};
 const source = {b: 2, c: 8};
 const returnedTarget = Object.assign(target, source);
 console.log(target);
 console.log(returnedTarget);
 console.log(source);

 /* Output
 { a: 14, b: 2, c: 8 }
 { a: 14, b: 2, c: 8 }
 { b: 2, c: 8 }
 */



 //(2). Object.create()
 /* this method is used to create a prototype 
 of an object*/

 // For example :
 const hello = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  const me = Object.create(hello);
  me.name = 'Saransh'; 
  me.isHuman = true; 
  me.printIntroduction();

// Output:
// My name is Saransh. Am I human? true



// (3). Object.defineProperties():
// This method defines new or modifies existing properties directly on an object, returning the object.
// For example:
const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});
console.log(object1.property1);

// Output:
// 42



// (4). Object.entries():
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, 
//in the same order as that provided by a for...in loop.(The only important difference is that a for...in loop enumerates
// properties in the prototype chain as well). 
// For example:
const object2 = {
    a: 'somestring',
    b: 42
  };
  for (const [key, value] of Object.entries(object2)) {
    console.log(`${key}: ${value}`);
  }

// Output:
// a: somestring
// b: 42



// (5). Object.freeze():
// A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, 
// existing properties from being removed, prevents changing the enumerability, configurability, or writability 
// of existing properties, and prevents the values of existing properties from being changed.
// For example:
const obj = {
    prop: 42
  };
  Object.freeze(obj);
  obj.prop = 33;
  // Throws an error in strict mode
  console.log(obj.prop);
  // expected output: 42



// (6). Object.getOwnPropertyDescriptor():
//   The Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific 
//   property on a given object (that is, one directly present on an object and not in the object's 
//   prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration.
//  For example:
const object10 = {
    property1: 42
  };
  const descriptor1 = Object.getOwnPropertyDescriptor(object10, 'property1');
  console.log(descriptor1.configurable);
  // expected output: true
  console.log(descriptor1.value);
  // expected output: 42



  // (7).  Object.getOwnPropertyDescriptors():
  // This method returns all own property descriptors of a given object.
  // For example:
  const object9 = {
    property1: 42
  };
  const descriptors1 = Object.getOwnPropertyDescriptors(object9); 
  console.log(descriptors1.property1.writable);
  // expected output: true
  console.log(descriptors1.property1.value);
  // expected output: 42



  // (8).  Object.getPrototypeOf():
  //   The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal
  //   [[Prototype]] property) of the specified object.
  // For example:
  const prototype1 = {};
  const object8 = Object.create(prototype1);
  console.log(Object.getPrototypeOf(object8) === prototype1);   
  // expected output: true



  // (9).  Object.is():
  // The Object.is() method determines whether two values are the same value.
  // For example:
Object.is('foo', 'foo');     // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false



  // (10). Object.keys():
  // The Object.keys() method returns an array of a given object's own enumerable property names, 
  //iterated in the same order that a normal loop would.
  const object7 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(Object.keys(object7));
  // expected output: Array ["a", "b", "c"]


  
  // (11). Object.prototype.hasOwnProperty():
  // The hasOwnProperty() method returns a boolean indicating whether the object has the specified property 
  // as its own property (as opposed to inheriting it).
  const object6 = {};
  object1.property1 = 42;
  console.log(object6.hasOwnProperty('property1'));
  // expected output: true
  console.log(object6.hasOwnProperty('toString'));
  // expected output: false
  console.log(object6.hasOwnProperty('hasOwnProperty'));
  // expected output: false



  // (12). Object.prototype.toLocaleString():
  // The toLocaleString() method returns a string representing the object.
  // This method is meant to be overridden by derived objects for locale-specific purposes.
  // For example:
  const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  console.log(date1.toLocaleString('ar-EG'));
  // expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"
  const number1 = 123456.789;
  console.log(number1.toLocaleString('de-DE'));
  // expected output: "123.456,789"



  // (13). Object.prototype.toString():
  // The toString() method returns a string representing the source code of the function.
  // For example: 
  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum.toString());
  // expected output: "function sum(a, b) {
  //                     return a + b;
  //                   }"
  
  console.log(Math.abs.toString());
  // expected output: "function abs() { [native code] }"



  // (14). Object.prototype.valueOf():
  // The valueOf() method returns the primitive value of the specified object.
  function MyNumberType(n) {
    this.number = n;
  }
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  const object4 = new MyNumberType(4);
  console.log(object4 + 3);
  // expected output: 7



  // (15). Object.values():
  // The Object.values() method returns an array of a given object's own enumerable property values,
  // in the same order as that provided by a for...in loop.
  // For example:
  const object3 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(Object.values(object3));
  // expected output: Array ["somestring", 42, false]
