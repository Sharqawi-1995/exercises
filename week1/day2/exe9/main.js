

const arr = [1,2,3,4,5,6,7,8,9]
const isEven = function(arr){
    let x=0
    for(var i=0 ; i < arr.length; i++){
    if  (arr[i]%2!==0){
        console.log(arr[i])
    }
    }
    
}
isEven(arr)
// console.log(isEven(3))
// console.log(isEven(4))