

const arr = [1,2,3,4,5,6,7,8,9]
let num=4
const checkExi = function(arr,num){
    
    for(i=0 ; i < arr.length; i++){
       if (arr[i]==num){
         return true
        }
    }
    return false
}
console.log(checkExi(arr,num))
