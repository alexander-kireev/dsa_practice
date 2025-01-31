// TASK:
// given 2 sorted arrays of ingeters, create a function to merge them,
// returning 1 sorted array

// arr1 = [1,3,4,7]
// arr2 = [2,5,9]
// should return [1,2,3,4,5,7,9]


// my solution works, but clearly it would be better to use a 2 pointer
// solution. it would still be O(n), but cleaner, more efficient


// solution in O(n)
function mergeSortedArrays(arr1, arr2) {
    // declare empty array to store merged and sorted values
    let mergedArray = [];

    // run loop while neither of 2 arrays is empty
    while (arr1.length > 0 && arr2.length > 0) {
        // check values in arrays to see which is largest
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            // get largest value
            mergedArray.push(arr1[arr1.length - 1]);

            // pop it
            arr1.pop();
        } else {
            // get largest value
            mergedArray.push(arr2[arr2.length - 1]);

            // pop it
            arr2.pop();
        }
    }

    // ensure both arrays are empty
    while (arr1.length > 0) {
        mergedArray.push(arr1[arr1.length - 1]);
        arr1.pop();
    }

    while (arr2.length > 0) {
        mergedArray.push(arr2[arr2.length - 1]);
        arr2.pop();
    }
  
    // reverse and return merged array
    return mergedArray.reverse();
}
    

let arr1 = [1,3,4,7]
let arr2 = [2,5,9]

let mergedArray = mergeSortedArrays(arr1, arr2);

console.log(mergedArray);