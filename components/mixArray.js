
export default function mixArray(arr, curAns) {
    if (!checkIfExist(arr, curAns)){
        arr.push(curAns);
    }
    var mixed = [];
    while (arr.length > 0){
        var index = Math.floor(Math.random() * (arr.length ));
        mixed.push(arr[index]);
        arr = Remove(index, arr);
    }
    return mixed;
}

function checkIfExist(arr, str){
    for (var i of arr){
        if(i == str){
            return true;
        }
    }
    return false;
}

function Remove(index,array){
    var newArr = []
    for (let i = 0; i < array.length; i++) {
        if(i != index)
            newArr.push(array[i])  
    }
    return newArr
}
