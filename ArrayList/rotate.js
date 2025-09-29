function rotate(arr, d) {
    let n = arr.length;
    let temp = arr.slice(0, d);

    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }
    for (let i = 0; i < d; i++) {
        arr[n - d + i] = temp[i];
    }
    return arr;

}
let arr = [1, 2, 3, 4, 5];
console.log(rotate(arr, 2));
