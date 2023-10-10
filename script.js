var filter = function(arr, fn) {
    const filteredArr = []
    for( let i =0; i< arr.length; i++) {
        returnArray = fn(arr[i], i)
        filteredArr.push(returnArray)
    }

    return filteredArr 
};
function greaterThan10(n) {
    return n > 10;

}
const inputArr = [0, 10, 20, 30]
const newArray = filter(inputArr, greaterThan10)
console.log(newArray)