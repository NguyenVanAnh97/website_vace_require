// console.log("số lơn thứ nhì là : " + myArr[(myArr.indexOf(Math.max(...myArr)) - 1)]);

// var SeachIndex = function(arr){
//     let max;
//     for(let i = 0 ; i < arr.lenght ; i++){

//     }
// }
var seachIndex = function (arr) {
  if (arr.length > 1) {
    let newArr = arr.sort((a, b) => a - b);
    let maxNum = Math.max(...newArr);
    let index = newArr.indexOf(maxNum - 1);
    return console.log("số lớn thứ nhì trong mảng là : " + newArr[index]);
  } else {
    return console.log("trong mảng phải có ít nhất 2 phần tử trở lên");
  }
};

var myArr = [96, 97, 95, 94];
seachIndex(myArr);
