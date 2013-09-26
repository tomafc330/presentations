function multipleByMax(multi){
    return multi * Math.max.apply(Math, arguments.slice(1));
}

multiMax(3, 1, 2)

function multipleByMax(multi){
    return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
}













