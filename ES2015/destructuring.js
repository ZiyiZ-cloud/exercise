// 1. 8
//     1846

// 2. {
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

//3.
// function getUserData({ firstName, favoriteColor = "green" }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // ?
// getUserData({ firstName: "Melissa" }) // ?
// getUserData({}) // ?

// 'Your name is Alejandro and you like purple'
// 'Your name is Melissa and you like green'
// 'Your name is undefined and you like green'


//4 
'Maya'
'Marisa'
'Chi'

//5
"Raindrops on roses"
"whiskers on kittens"

[
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

//6
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

[10, 30, 20]

//7
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
var a = obj.numbers.a;
var b = obj.numbers.b;

//2015
const { a, b } = obj.numbers

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//2015

[arr[0], arr[1]] = [arr[1], arr[0]];


raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const { first, second, thrid, ...rest } = raceResults;
const raceResults = ([first, second, thrid, ...rest]) => ({ first, second, thrid, rest })