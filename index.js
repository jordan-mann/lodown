'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take a value, and return the value unchanged
 * @param {Any Value} value 
 * @returns {Any Value}
 */
 function identity(value) {
    return value;
}
module.exports.identity = identity;




/**
 * typeOf: Designed to take a value, and return the name of the value type as a string
 * @param {Value} value 
 * @returns the name of the value type as a string
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
   * @param {Array} array 
   * @param {Number} number 
   * @returns the first <number> values from the beginning of the array
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
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
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
