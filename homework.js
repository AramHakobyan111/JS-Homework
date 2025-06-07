let function Lenght_(str) {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        length++;
    }
    return length;
}
    

let function toUppercase_(str) {
    let upperStr = '';
    for (let i = 0; i < str.length; i++) {
        upperStr += str[i].toUpperCase();
    }
    return upperStr;
}

let function Gumar_(a, b) {
    let result = 0;
    for (let i = 0; i < a; i++) {
        result += b;
    }
    return result;
}

let function miavorum(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

