// console.log("số lơn thứ nhì là : " + myArr[(myArr.indexOf(Math.max(...myArr)) - 1)]);

var seachIndex = (arr) => {
  if (arr.length > 1) {
    let newArr = arr.sort((a, b) => a - b);
    let maxNum = Math.max(...newArr);
    let index = newArr.indexOf(maxNum - 1);
    return console.log("số lớn thứ nhì trong mảng là : " + newArr[index]);
  } else {
    return console.log("trong mảng phải có ít nhất 2 phần tử trở lên");
  }
};

var myArr = [9, 2, 8, 1, 7, 10];
seachIndex(myArr);


let shortArr = [
  { name: "văn anh", age: 22, address: "hà nội" },
  { name: "lan", age: 19, address: "sài gòn" },
  { name: "chí", age: 22, address: "đà nẵng" },
];


console.log("Map func : " + shortArr.map(val => val.name));
console.log(shortArr.filter(val => val.age >= 18 && val.address == "hà nội"));
console.log("tổng số tuổi trong mảng : " + shortArr.reduce((a,b) => a + b.age,0));
console.log("Some func : " + shortArr.some(val => val.age > 20));
console.log("Every func : " + shortArr.every(val => val.age > 20));


