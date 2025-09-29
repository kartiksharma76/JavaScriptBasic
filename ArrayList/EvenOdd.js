let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxEven = Number.MIN_SAFE_INTEGER;
let minOdd = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        if (arr[i] > maxEven)
            maxEven = arr[i];
    } else {
        if (arr[i] < minOdd)
            minOdd = arr[i];

    }

}
console.log("Largest even element in array:", maxEven);
console.log("Smallest odd element in array:", minOdd);