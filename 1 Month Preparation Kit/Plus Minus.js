'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let posArr = arr.filter(num => num > 0);
    let negArr = arr.filter(num => num < 0);
    let zeroArr = arr.filter(num => num == 0)
    
    posArr = (parseFloat((posArr.length / arr.length) * 100)/100).toFixed(6)
    negArr = (parseFloat((negArr.length / arr.length) * 100)/100).toFixed(6)
    zeroArr = (parseFloat((zeroArr.length / arr.length) * 100)/100).toFixed(6)
    
    console.log(posArr)
    console.log(negArr)
    console.log(zeroArr)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
