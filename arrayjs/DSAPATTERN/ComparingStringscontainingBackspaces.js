function backspaceCompare(str1, str2) {
    return buildString(str1) === buildString(str2);


}
function buildString(str) {
    const result = [];

    for (let char of str) {
        if (char === '#') {
            result.pop();


        } else {
            result.push(char);
        }
    }
    return result.join('');
}
console.log(backspaceCompare("xy#z", "xzz#")); // true
console.log(backspaceCompare("xy#z", "xyz#")); // false
console.log(backspaceCompare("xp#", "xyz##")); // true
console.log(backspaceCompare("xywrrmp", "xywrrmu#p")); // true