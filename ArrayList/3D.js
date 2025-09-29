let arr = [[[1, 2], [3], [4, 5, 6]], [[7], [8, 9, 10]], [[11], [12, 13]]];

console.log("All elements:");
for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[i].length; j++)
        for (let k = 0; k < arr[i][j].length; k++)
            process.stdout.write(arr[i][j][k] + " ");
console.log();

// 2. Print lengths
for (let i = 0; i < arr.length; i++) {
    console.log(`Length of 2D array arr[${i}]: ${arr[i].length}`);
    for (let j = 0; j < arr[i].length; j++)
        console.log(`Length of 1D array arr[${i}][${j}]: ${arr[i][j].length}`);
}

// 3. Print specific elements
console.log("arr[0][2][1] =", arr[0][2][1]); // 5
console.log("arr[1][1][2] =", arr[1][1][2]); // 10
console.log("arr[2][1][1] =", arr[2][1][1]); // 13
