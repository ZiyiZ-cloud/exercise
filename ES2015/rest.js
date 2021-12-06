function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}

function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0);
}

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);


//findMin
const findMin = (...args) => Math.min(...args);

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2 });

//doubleAndReturnArgs
const doubleAndReturnArgs = (...args) => args.map(v => v * 2);
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

//Slice and Dice
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    return
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val };
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObj = {...obj };
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obg1, ...obj2 };
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val };
}