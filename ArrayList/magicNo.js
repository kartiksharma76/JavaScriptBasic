function findMagicNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return arr[i];

        }
    }
    return -1;

}
let arr = [-1, 1, 2, 3, 5, 7];
let magic = findMagicNumber(arr);
if (magic !== -1) {
    console.log(magic);


} else {
    console.log("no magic");

}