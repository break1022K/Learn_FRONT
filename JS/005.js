function TypeCheck(value) {
    const return_value = Object.prototype.toString.call(value);
    const type = return_value.substring(
        return_value.indexOf(' ') + 1,
        return_value.indexOf(']')
    );

    return type.toLowerCase();
}

typeof(value) === 'number'
TypeCheck(value) === 'number'
isNaN(value) // value '', ' ', '1', '2', '3' : false / 'a', 'b', 'c' : true
arr.constructor === Array
arr instanceof Array