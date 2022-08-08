const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1,2)
numbers[3]=1
// for(var i=1 ; i<=4 ; i++){
//     let x = numbers.length
//     numbers.splice(x-1)
// }
numbers.splice(numbers.length-4)
numbers.unshift(0)
console.log(numbers)