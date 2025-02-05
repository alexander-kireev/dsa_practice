// TASK:
// given an array of numbers and a target sum, write a function that returns true 
// if any two numbers in the array add up to the target sum, and false otherwise

// const arr = [3, 5, 1, 7, 9];
// const target = 10;
// should return true
// ------------------
// const arr = [3, 5, 1, 7, 9];
// const target = 15;
// should return false

// brute force solution O(n^2)
function hasPairWithSumBrute(nums, target) {
    // loop over array once
    for (let i = 0; i < nums.length; i++) {
        // compare every item of array with every other item of array
        for (let j = 0; j < nums.length; j++) {
            // ensure we do not use the same array item twice to generate target sum
            if (i != j) {
                // check if target sum can be generated
                if (nums[i] + nums[j] === target) {
                    return true;
                }
            }
        }
    }

    return false
}

// hashmap solution O(n)
function hasPairWithSum(nums, target) {
    // create hashmap
    let found = {};

    // iterate over array once
    for (let i = 0; i < nums.length; i++) {
        // get int to look up in hashmap as a pair
        let difference = target - nums[i];

        // check if difference exists
        if (difference in found) {
            return true;
        }

        // if it doesn't, add current int to hashmap
        found[nums[i]] = nums[i];
    }

    return false;
}

const arr = [3, 5, 1, 7, 9];
const target = 10;

result = hasPairWithSum(arr, target);

console.log(result);