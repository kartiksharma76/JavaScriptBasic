function segrigateEvenOdd(arr) {
    let even = [];
    let odd = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);


        } else {
            odd.push(num);
        }
    }
    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b);

    return even.concat(odd);

}
let arr = [0, 1, 2, 3, 4, 5];
arr = segrigateEvenOdd(arr);
console.log(arr);
