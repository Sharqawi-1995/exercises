/*exe1*/
const findFactorial = function(num, currentPorduct = num) {
    if(num === 1 || num < 1) { return currentPorduct }


    currentPorduct *= (num - 1)
    num--


    return findFactorial(num, currentPorduct)
}


/*exe2*/
const reverseString = function (str, newStr = '') {
    

    if(str.length === 0) { return newStr }


    newStr += str.slice(str.length - 1)
    str = str.slice(0, str.length - 1)


    return reverseString(str, newStr)
}


/*exe3*/
const swap = function(arr1, arr2) {
    if(arr1.length === 0) { return }


    arr2.push(arr1.splice(0,1)[0])


    return swap(arr1, arr2)
}