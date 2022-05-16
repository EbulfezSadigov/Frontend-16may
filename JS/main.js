"Use script"

//foreach metodu
// let arr=[1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// arr.forEach(element=>{
//     console.log(element);
// })

// every method
// let array=[1,2,3,4,5];
// let result = true;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] <= 0) {
//         result = false;
//         break;
//     }
// }
// console.log(result);


//some method
// let marks = [8,5,7,9,10,3];

// let lessThanFive = false;

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] < 5) {
//         lessThanFive = true;
//         break;
//     }
// }

// console.log(lessThanFive);


//IndexOf metodu

// let arr1=[1,2,3,4,5];
//   function getIndex(arr, valuetosearch) {
//     for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === valuetosearch) return i;
//     }
//     return -1;
//     }
// console.log(getIndex(arr1,5))


//lastIndexOf metodu

// let arr1=[1,2,3,4,5,2,1];
//   function getIndex(arr, valuetosearch) {
//     for (var i = arr.length; i > 0 ; i--) {
//     if (arr[i] === valuetosearch) return i;
//     }
//     return -1;
//     }
// console.log(getIndex(arr1,1))


//Find metodu

// let arr=[1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {
//         console.log(arr[i]);
//         break;
//     }
// }


//FindIndex metodu

let arr=[1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
        console.log(i);
        break;
    }
}

//Includes metodu

let arr1=[1,2,3,4,5];
  function getIndex(arr, valuetosearch) {
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] === valuetosearch) return true;
    }
    return false;
    }
console.log(getIndex(arr1,5))