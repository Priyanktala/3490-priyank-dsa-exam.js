//Add Array

let arr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let position = 5;
let element = 43;
let array_2 = 0;

for (let i = arr.length; i >= position; i--) {
    if (i == position) {
        array_2 = arr[i];
        arr[i] = element;
    }
}
arr[arr.length] = array_2;

console.log(arr);



//Remove Array

let array = [0,1,2,3,4,5,6,7,8,9,10];
let index = 5;

for (let i = index; i < array.length-1; i++) {
    array[i] = array[i + 1];
}
array.length = array.length - 1;
console.log(array);