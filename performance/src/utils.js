//数组删除index位置元素，不改变原始数组
function remove(arr, index) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i != index) {
            result.push(arr[i]);
        }
    }
    return result;
}


export default remove