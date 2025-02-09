// TASK:
// given an array of single characters, find the first reccuring character

// const arr = [3, 5, 9, 2, 5, 7, 7, 3]
// should return 5

// const arr = [3, 5, 9, 2, 1, 8, 7]
// should return undefined

// brute for solution O(n^2)
function firstReccuringCharBrute(arr) {
    // declare array to store previously seen chars
    let seen = [];

    // loop over array
    for (let i = 0; i < arr.length; i++) {
        // check if seen array contains current element
        if (seen.includes(arr[i])) {
            return arr[i];
        }
        
        // push current element to seen array
        seen.push(arr[i]);
    }

    return undefined
}

// object solution O(n)
function firstReccuringChar(arr){
    // declare set to store previously seen elements
    let seen = new Set();

    // loop over initial array
    for (let i = 0; i < arr.length; i++) {
        // check if seen set contains current element
        if (seen.has(arr[i])) {
            return arr[i];
        }

        // add current element to seen set
        seen.add(arr[i]);
    }

    return undefined
}

const arr1 = [3, 5, 9, 2, 5, 7, 7, 3] 
const arr2 = [3, 5, 9, 2, 1, 8, 7]

console.log(firstReccuringChar(arr1))
console.log(firstReccuringChar(arr2))