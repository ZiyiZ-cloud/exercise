// new Set([1,1,2,2,3,4])

// this will return {1, 2, 3, 4}

// [...new Set("referee")].join("")

// this will return 'ref'


// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// this will return both sets with the first true and second false


function hasDuplicate(arr) {
    const original = arr.length;
    const dupCheck = [...new Set(arr)].length;
    if (original > dupCheck) {
        return false;
    } else { return true; }
}


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function countVowel(str) {
    const newArr = [];
    const arr = Array.from(str);
    const vowel = 'aeiou';

    arr.forEach(function(val) {
        const newVal = val.toLowerCase();
        if (vowel.indexOf(newVal) !== -1) {
            if (newArr[newVal]) {
                newArr[newVal]++;
            } else {
                newArr[newVal] = 1;
            }
        }
    })

    const countMap = new Map(newArr);
    countMap.forEach((val, key) => {
        return (key + '=>' + val);
    });

}