function makeSquares(arr) {
    const n = arr.lengt;
    const squares = new Array(n);

    let left = 0;
    let right = n - 1;
    let highestIndex = n - 1;

    while (left <= right) {
        const leftSquare = arr[left] * arr[left];
        const rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            squares[highestIndex] = leftSquare;
            left++;

        } else {
            squares[highestIndex] = rightSquare;
            right--;
        }
        highestIndex--;


    }
    return squares;
}
console.log(makeSquares([-4, -1, 0, 3, 10]));
console.log(makeSquares([-7, -3, 2, 3, 11]));
console.log(makeSquares([-2, -1, 0, 2, 3]));