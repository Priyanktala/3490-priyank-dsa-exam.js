function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var quick = array[0];
    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < quick) {
                left[left.length] = array[i];
        }
        else {
            right[right.length] = array[i];
        }
    }
    result = quickSort(left)
    result = result.concat(quick)
    result = result.concat(quickSort(right))

    return result;

};

let array = [43, 20, 89, 90, 31, 78, 72, 40,];
console.log(quickSort(array));