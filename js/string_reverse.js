// TASK:
// create function to reverse a string

// str1 = 'my string'
// should return 'gnirts ym'
// -----------------
// str1 = ''
// should return ''


// brute force solution O(n^2)
function reverseStringBrute(str) {
    let revStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        revStr+= str[i];
    }
    return revStr;
}


// array solution O(n)
function reverseStringArray(str) {
    let revStr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        revStr.push(str[i]);
    }
    return revStr.join('');
}


const str = 'my string';
let reversedString = reverseStringArray(str);
console.log(reversedString);