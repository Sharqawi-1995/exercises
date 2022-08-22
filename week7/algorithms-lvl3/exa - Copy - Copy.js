function Profit(arr) {
  let max = arr[arr.length - 1];
  let min = arr[0];
  for (let i = 0, j = arr.length;i<arr.length-1; i++, j--) {
    let tempI = arr[i];
    let tempJ = arr[j];

    if (min > tempI) {
      min = tempI;
    }

    if (arr.i>=arr.j) {
      
    }else  if (max < tempJ) {
      max = tempJ;
    }


  }
  console.log("min="+min+" "+"max="+max);
  let profit = max - min;

  if (profit <= 0) {
    console.log("you did not make any profit " + profit);
  } else console.log("you did make a profit " + profit);

  return profit;
}

let arr1= [10, 7, 5, 8, 5, 9];// 4
let arr2=[200, 150, 180, 300, 10, 150]//150
let arr3=[100, 50, 100, 30, 90]//60
let arr4=[100, 90, 90, 80, 80]//0
let arr5=[100, 90, 80, 60, 50]//-10
Profit(arr1)
Profit(arr2)
Profit(arr3)
Profit(arr4)
Profit(arr5)