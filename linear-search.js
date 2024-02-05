let array = [10, 15, 20, 25, 30, 35, 40, 45, 50,]
let value = 40;

function li(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {

            return true;
        }
    }
    return false;
}
let data = li(array, value);

if (data == true) {
    console.log("This element is in array");
}
else {
    console.log("This element is not found in array");
}