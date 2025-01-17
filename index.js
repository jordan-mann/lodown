'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take a value, and return the value unchanged
 * @param {Any Value}: function takes any value 
 * @returns {Any Value}: function returns the input value, unchanged
 */
 function identity(value) {
    return value;
}
module.exports.identity = identity;




/**
 * typeOf: Designed to take a value, and return the name of the value type as a string
 * @param {Value}: function takes in any type of value 
 * @returns {String}: Function returns the name of the value type as a string
 */

//function typeOf takes any value as an argument
//use typeof method, logical operators, Array.isArray() method and instanceof Date to determine the type of the input value nd return that value as a string
function typeOf(value) {
    //test if value is a string
    if (typeof value === 'string') {
        //return 'string'
        return 'string';
        //else test if value is an array
    }else if (Array.isArray(value)) {
        //return 'array'
        return 'array';
        //else test if value is an object use as a collection
    }else if (typeof value === 'object' && !(Array.isArray(value)) && value !== null && !(value instanceof Date)) {
        //return 'object'
        return 'object';
        //else test if value is undefined
    }else if (typeof value === 'undefined') {
        //return 'undefined'
        return 'undefined';
        //else test if value is a number
    }else if (typeof value === 'number') {
        //return 'number'
        return 'number';
        //else if value is a boolean
    }else if (typeof value === 'boolean') {
        //return 'boolean'
        return 'boolean';
        //else test if value is null
    }else if (value === null) {
        //return 'null'
        return 'null';
        //else test if value is a function
    }else if (typeof value === 'function') {
        return 'function';
    }

  }
  module.exports.typeOf = typeOf;




  /**
   * first: Designed to take and array and a number, and return the first <number> values from the beginning of the array. For example, if the number is 3, return the first
   * 3 values from the array.
   * The function needs to test if the the value put in as a number is truly a number, and if so, make sure it's not negative, and not longer than the number of indexes
   * in the array.
   * The function needs to test if the value put in as an array is truly an array.
   * @param {Array}: function takes in an array 
   * @param {Number}: function takes in a number 
   * @returns {Value, Value, Value}: Function returns the first <number> values from the beginning of the array
   */

//create a function that takes an array and a number
function first(array, number) {
//Create newArray variable and assign it to an empty array
let newArray = [];
//test if number is negative
if (number < 0) {
    //if negative, return empty array
    return [];
    //else test if number is greater than array length
}else if (number > array.length) {
    //if true, return whole array
    return array;
    //else test if array is not an array
}else if (!(Array.isArray(array))) {
    //if true, return empty array
    return [];
    //else test if value type of number parameter is a number or if it exists
}else if (typeof number !== 'number' || number === undefined) {
    //if it is not a number or does not exist, return first element of array
    return array[0];
    //if none of the above return, iterate through array with a for loop, using number as the range
}else {
    for (let i = 0; i < number; i++){
        //push <number> of array items into newArray
        newArray.push(array[i])
    }
}
//return newArray
return newArray;
  }
  module.exports.first = first;



/**
   * last: Designed to take and array and a number, and return the last <number> values from the end of the array. For example, if the number is 3, remove the last 3 values
   * from the array.
   * The function needs to test if the the value put in as a number is truly a number, and if so, make sure it's not negative, and not longer than the number of indexes
   * in the array.
   * The function needs to test if the value put in as an array is truly an array.
   * @param {Array}: function takes in an array 
   * @param {Number}: function takes in a number 
   * @returns {Value, Value, Value}: Function returns the last <number> values from the end of the array.
   */

  function last(array, number) {
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //test if number is negative
    if (number < 0) {
        //return empty array
        return [];
        //else if number is great than the length of the array
    }else if (number > array.length) {
        //return array
        return array;
        //test if input array is not an array
    }else if (!(Array.isArray(array))) {
        //if not an array, return empty array
        return [];
        //else, test if input number is not a number
    }else if (typeof number !== 'number' || number === undefined) {
        //return last element of array
        return array[array.length - 1];
        //else return the last <number> of items of array
    }else{
        //iterate through array
        for (let i = array.length - number; i < array.length; i++) {
            //push items into newArray
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.last = last;




/**
 * indexOf: Designed to take an array and a value and return the index of the array that is the first occurence of the input value.
 * If the value is not in the array, the function should retrun -1.
 * If the array has multiple instance of the value, it should only return the first time it occurs, because the return statement will end the function the moment it finds the first occurence.
 * @param {Array}: function takes in an array 
 * @param {Value}: function takes in a parameter of any value 
 * @returns {Number}: function returns the index of the array that is the first occurence of the input value. It returns -1 if that index doesn't exist.
 */

function indexOf(array, value) {
    //loop through input array
    for (let i = 0; i < array.length; i++) {
        //test if current item equals input value
        if (array[i] === value) {
            //if true, return index
            return i;
        }
    }
    //else return -1
    return -1;
}
module.exports.indexOf = indexOf;




/**
 * contains: Designed to take an array and a value, and return true if the array contains the value, and false otherwise.
 * This function should use a ternary operator
 * @param {Array}: function takes in an array 
 * @param {Value}: function takes a parameter of any value 
 * @returns {Boolean}: Function returns true if the array contains the input value, and false if it does not
 */

function contains(array, value) {
    //use .includes with a ternary operator to test if the value is in the array. True if so, false otherwise.
  return array.includes(value) ? true : false;
  }
  module.exports.contains = contains;




/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object}: function takes a collection, which can be either an array or an object
 * @param {Function}: The Function takes a callback function.
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;





/**
 * unique: Designed to take an array, and return a new array of values from the input array, with all duplicates removed.
 * We can use our _.indexOf function in this function to help get our result
 * @param {Array}: function takes an array 
 * @returns {Array}: Function returns new array with all duplicates from the input array removed. 
 */

function unique(array) {
    //create variable and assign it to an empty array
  let newArray = [];
  
  //use for loop to iterate through input array
  for (let i = 0; i < array.length; i++) {
  
    //use if statement to test if if current value of array is not in the newArray && is not an empty string
  if (newArray.indexOf(array[i]) === -1)
  //if it passes both test, push that value into the newArray
    newArray.push(array[i])
  
  }
  return newArray;
  }
  module.exports.unique = unique;





/**
 * filter: Designed to take an array and a function. Filter iterates through each element of the input array and calls the input function for each element.
 * For function calls that return true, it pushes the value into a new array. Filter then returns the new array. 
 * @param {Array}: function takes an array.
 * @param {Function}: function takes a callback function. 
 * @returns {Array}: Function returns a new array of values for which calling the input function returned true
 */


  function filter(array, func) {
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //iterate through input array
    for (let i = 0; i < array.length; i++) {
        //test if function call on current item is true
        if(func(array[i], i, array) ===  true) {
            //if true, push into newArray
            newArray.push(array[i]);
        }
    }
    //return newArray
    return newArray;
}
module.exports.filter = filter;




/**
 * reject: Designed to take an array and a function. Filter iterates through each element of the input array and calls the input function for each element.
 * For function calls that return false, it pushes the value into a new array. Filter then returns the new array. 
 * @param {Array}: function takes an array. 
 * @param {Function}: function takes a callback function.
 * @returns {Array}: Function returns a new array of values for which calling the input function returned false.
 */

function reject(array, func) {
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //iterate through input array
    for (let i = 0; i < array.length; i++) {
        //test if function call on current item is false
        if (func(array[i], i, array) === false)
        //if false, push into newArray
        newArray.push(array[i]);
    }
    //return newArray
    return newArray;
}
module.exports.reject = reject;





/**
 * partitition: Designed to take an array split the truthy and falsy values of they array into separate arrays, and return an array with those two arrays as subarrays in the return array.
 * @param {Array}: function takes an array. 
 * @param {Function}: function takes a callback function. 
 * @returns {Array}: Function returns an array containing two subarrays, one holding truthy values from the input array, and the other holding falsy values.
 */

 function partition(array, func) {
    //create three array variables
    let newArray = [];
    let truthyArray = [];
    let falsyArray = [];

    //iterate through input array
    for (let i = 0; i < array.length; i++) {
        //test if function call is truthy
        if (func(array[i], i, array)) {
            //if true, push into truthy array
            truthyArray.push(array[i]);
            //esle function call is falsy
            //push item into falsy array
        }else {
            falsyArray.push(array[i]);
        }
    }
    //push truthyArray into newArray
    newArray.push(truthyArray);
    //push falsyArray into newArray
    newArray.push(falsyArray);
    //return newArray
    return newArray;
}
module.exports.partition = partition;




/**
 * map: Designed to take a collect of an array or object, and a function, that takes the current element, the index and the array. 
 * map needs to determine whether the collection is an object or an array.
 * The input function should be called for each item of the array, or each key/value pair of the object, and push the return of the function call into a new array
 * @param {Array or Object}: function takes either an array or an object.
 * @param {Function}: function takes a callback function.
 * @returns {Array}: Function returns a new array of the return values that resulted from the function calls on each element of the input collection.
 */


function map(collection, func) {
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //determine if collection is an array
    if (Array.isArray(collection)) {
        //if array, loop through array
        for (let i = 0; i < collection.length; i++) {
            //push the result of the function call on each item of the collection into the newArray
            newArray.push(func(collection[i], i, collection)) 
        }
        //else collection is an object
    }else {
        //loop through keys value pairs
        for (var key in collection) {
            //push the result of the function call on each value in the collection object into newArray
            newArray.push(func(collection[key], key, collection));
        }
    }
    //return newArray
    return newArray;
}
module.exports.map = map;





/**
 * pluck: Designed to iterate through the input array and return a new array of values that have the same property as the input property
 * @param {Array}: function takes an array 
 * @param {Property}: function takes the property of an object 
 * @returns {Array}: Function returns a new array of values that have the same property as the input property
 */


function pluck(array, property) {
    //return the function call of map on the array
    return array.map(function(item) {
        //map pushes the items into an new array
        return item[property];
    })
}
module.exports.pluck = pluck;





/**
 * every: Designed to take a collection as an array or an object, and a function. The function is desigend to test if each element of the collection is falsy. If any is falsy, return false. 
 * If there is no input function, <every> should still test the collection to determine if the collection is an array or an object and determine if the values are flasy.
 * If any is falsy, return false.
 * Return true only if every element in a collection is truthy.
 * @param {Array or Object}: function takes a collection in the form of either an array or an object.
 * @param {Function}: function takes a callback function.
 * @returns {Boolean}: Function returns true if every element in a collection is truthy, or false if a single element is falsy.
 */

function every(collection, func) {
    //determine if collection is an array
    if (Array.isArray(collection)) {
        // determine if func wasn't passed in
        if (func === undefined){
            for (let i = 0; i < collection.length; i++) {
                //determine if the current item is not truthy
                if (!collection[i]){
                    //return false
                    return false;
                }
            }
        }else { //it was
            for (let i = 0; i < collection.length; i++) {
                //determine if current value return false when passed into func
                if (func(collection[i], i, collection) === false) {
                    //if any item was false, return false
                    return false;
                }
            }
        }
        //else it's an object
    }else {
        //determine if func wasn't passed in
        if (func === undefined) {
            //iterate through object values
            for (var key in collection) {
                //test if any values are falsy
                if (!collection[key]) {
                    //if any item was falsy, return false
                    return false;
                }
            }
        }else { //else function was passed in
            //loop through values in object
            for (var key in collection) {
                //test if function call on any item is false
                if (func(collection[key], key, collection) === false) {
                    //if any item is false, return false
                    return false;
                }
            }
        }
        
    }
    return true;
}
module.exports.every = every;





/**
 * some: Designed to take a collection as an array or an object, and a function. The function is desigend to test if any element of the collection is truthy. If any is truthy, return true. 
 * If there is no input function, <some> should still test the collection to determine if the collection is an array or an object and determine if any values are truthy.
 * If any is truthy, return true.
 * Return false only if every element in a collection is falsy.
 * @param {Array or Object}: function takes a collection in the form of either an array or an object.
 * @param {Function}: function takes a callback function.
 * @returns {Boolean}: Function returns false if every element in a collection is falsy, or true if a single element is truthy
 */


function some(collection, func) {
    //test if collection is an array
    if(Array.isArray(collection)) {
        //test if function is not given
        if (func === undefined) {
            //loop through collection
            for (let i = 0; i < collection.length; i++) {
                //test if each item is truthy
                if (collection[i]) {
                    //if any item is truthy, return true
                    return true;
                }
            }
            //else the function is given
        }else {
            //loop through collection
            for (let i = 0; i < collection.length; i++) {
                //test if the function call on each iteration of the collection is true
                if (func(collection[i], i, collection) === true) {
                    //if any is true, return true
                    return true;
                }  
            }
        }
        //else the collection is an object
    }else {
        //test if the function is not given
        if (func === undefined) {
            //loop through values of the object
            for (var key in collection) {
                //test if the value is truthy
                if (collection[key]) {
                    //if any value is truthy, return true
                    return true;
                }
            }
            //else the function was given
        }else {
            //loop through values of the object
            for (var key in collection) {
                //test if the function call on each iteration of the collection is true
                if (func(collection[key], key, collection) === true) {
                    //if ny is true, return true
                    return true;
                }
            }
        }
    }
    //return false if no values returned true
    return false;
   
}
module.exports.some = some;





/**
 * reduce: Designed to take an array, a function, and a seed. The input function is designed to take an accumulation, current element, index, and array.
 * The input function should loop through the input array, and take the return of each function call to create the new accumulation value. 
 * As the function is called for each element of the array, the new accumulation value is assigned to the result of the return value.
 * The seed paramater is the starting point for the accumulation. The seed can be any datatype and it initializes the return value of the function.
 * If no seed is given, than the first element of the input array will act as the seed.
 * @param {Array}: function takes an array. 
 * @param {Function}: function takes a callback function.
 * @param {Seed}: function takes a seed, which can be a value of any data type. 
 * @returns {Number}: Function returns an accumlation of all the values of the input array
 */


function reduce(array, func, seed) {
    //create variable result
    let acc = 0;
    //test if seed is not passed in 
    if (seed === undefined) {
        //if seed is not passed in, acc eqauls first element of the input array
        acc = array[0];
        //loop through the array
        for (let i = 1; i < array.length; i++) {
            //acc equals the result of the function call on each item of the array
            acc = func(acc, array[i], i, array) 
        }
        //else the seed is passed in
    }else{
        //acc equals seed
        acc = seed;
        //loop through array
        for (let i = 0; i < array.length; i++) {
            //acc equals the result of the function call on each item of the array
           acc = func(acc, array[i], i, array) 
            
        }
    }
    //return acc
    return acc;
}
module.exports.reduce = reduce;





/**
 * extend: Designed to take an object and an array of potentially other objects. Any other objects should be added to the first input object. If any new object has keys with different values,
 * this should update the values of the original input object.
 * @param {Object}: function takes an object. 
 * @param  {Array}: function takes an array.
 * @returns {Object}: Function returns an object updated with any other objects, and updated with any updated values of any other added objects.
 */


function extend(myObj, ...moreObjects) {
    //loop through moreObjects array
    for (let i = 0; i < moreObjects.length; i++) {
        //use Object.assign to extend input object with each object at the current iteration of the moreObjects array
        Object.assign(myObj, moreObjects[i]) 
    }
    //return object
    return myObj;
}
module.exports.extend = extend;