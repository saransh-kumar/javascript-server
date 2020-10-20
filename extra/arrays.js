// Array.filter():
/* It is used to filter and create new array with all elements as given instruction in  */
//For example:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// Output :
// [ 'exuberant', 'destruction', 'present' ]



// Array.isArray():
// It is used to check whether the passed value is array.       // THIS ONE IS NOT WORKING AS 
//For example:
Array.isArray([1, 2, 3]);  
Array.isArray({foo: 123}); 
Array.isArray('foobar');   
Array.isArray(undefined); 


//Array.prototype.concat()
/* It is used to merge two arrays without changing them and return new array*/
//For example:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

// Output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]



//Array.prototype.copyWithin():
// It is used to modify some changes to the original array with same length of array
//For example:
const array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4.copyWithin(0, 2, 4));
console.log(array4.copyWithin(1, 3));
console.log(array4);

/* Output:
[ 'c', 'd', 'c', 'd', 'e' ]
[ 'c', 'd', 'e', 'd', 'e' ]
[ 'c', 'd', 'e', 'd', 'e' ]
*/



//Array.prototype.entries()
//The entries() method returns a new Array Iterator object that contains 
//the key/value pairs for each index in the array.
// For example:
const array5 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

// Output:
// [ 0, 'a' ]
// [ 1, 'b' ]



//Array.prototype.every()
// It is used to check whether given array is follow the given condition
//For example:
const isBelowThreshold = (currentValue) => currentValue < 40;
const array6 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

// Output:
// false



// Array.prototype.fill()
// It is used to fill the given range with the given data
// For example:
const array7 = [1, 2, 3, 4];
console.log(array7.fill(0, 2, 4));
console.log(array7.fill(5, 1));
console.log(array7.fill(6));

// Output: 
// [ 1, 2, 0, 0 ]
// [ 1, 5, 5, 5 ]
// [ 6, 6, 6, 6 ]



// Array.prototype.find():
// It is used to return he value of the first element in the provided array 
//that satisfies the provided testing function.
// For example:
const array10 = [5, 12, 8, 130, 44];
const found = array10.find(element => element > 10);
console.log(found);

//Output: 
// 12



//Array.prototype.findIndex():
//returns the index of the first element in the array that satisfies the provided testing function. 
//Otherwise, it returns -1, indicating that no element passed the test.
// For example:
const array9 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array9.findIndex(isLargeNumber));

// Output:
// 3



// Array.prototype.forEach()
// The forEach() method executes a provided function once for each array element.
// For example:
const array8 = ['a', 'b', 'c', 'd', 'e'];
array8.forEach(element => console.log(element));

// Output:
// a
// b
// c



// Array.prototype.includes():
// The includes() method determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.
// For example:
const array11 = [1, 2, 3];
console.log(array11.includes(2));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

// Output:
// true
// true
// false




// Array.prototype.indexOf()
// The indexOf() method returns the first index at which a given 
// element can be found in the array, or -1 if it is not present.
// For example:
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));
console.log(beasts.indexOf('giraffe'));

// Output:
// 1
// 4
// -1


// Array.prototype.join()
// The join() method creates and returns a new string by concatenating all of the 
// elements in an array (or an array-like object), separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator.
// For example:
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

// Output:
// Fire,Air,Water
// FireAirWater
// Fire-Air-Water



// Array.prototype.lastIndex():
// The lastIndexOf() method returns the last index at which a given element can be found in 
// the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// For example:
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
console.log(animals.lastIndexOf('Tiger'));

// Output:
// 3
// 1



// Array.prototype.map():
// This method creates a new array populated with the results of calling a provided function on every
// element in the calling array.
// For example:
const array12 = [1, 4, 9, 16];
const map1 = array12.map(x => x * 2);
console.log(map1);

// Output: [ 2, 8, 18, 32 ]



// Array.prototype.pop():
// It is used to remove the last element of array and modify the length of the array
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
plants.pop();
console.log(plants); 

// Output:
// [ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]
// [ 'broccoli', 'cauliflower', 'cabbage' ]


// Array.prototype.push():
// It is used to push an element in the end of array and change the length of array
const animals1 = ['pigs', 'goats', 'sheep'];
const count = animals1.push('cows');
console.log(count);
console.log(animals1);
animals1.push('chickens', 'cats', 'dogs');
console.log(animals1);

// Output:
// [ 'pigs', 'goats', 'sheep', 'cows' ]
// [
//   'pigs',     'goats',
//   'sheep',    'cows',
//   'chickens', 'cats',
//   'dogs'
// ]



// Array.prototype.reduce():
// The reduce() method executes a reducer function 
// on each element of the array, resulting in single output value.
// For example:
const array13 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array13.reduce(reducer));
console.log(array13.reduce(reducer, 5));

// Output:
// 10
// 15



// Array.prototype.some()
// It is used to test whether at least one element in the array passes the test 
// implemented by the provided function. It returns a Boolean value.
// For example:
const array14 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array14.some(even));

// Output: true


// Array.prototype.toString():
// The toString() method returns a string representing the specified array and its elements.
// For example:
const array15 = [1, 2, 'a', '1a'];
console.log(array15.toString()); 

// Output:
// "1,2,a,1a"



// Array.prototype.values:
// This method returns a new Array Iterator object that contains 
// the values for each index in the array.
// For example:
const array16 = ['a', 'b', 'c'];
const iterator = array16.values();
for (const value of iterator) {
  console.log(value);
}

// Output:
// a
// b
// c