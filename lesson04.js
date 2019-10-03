let arr = [1,2,3,4,5,6,7];
// arr.forEach((item, i, arr) => {console.log(item, i, arr)});

//для модификации
let arr2 = arr.map((item, i, arr) => {
    if (i == 2) {
        return "Hi";
    };
    return item*2;
});

//для фильтрования
let arr3 = arr.filter((item) => item < 5);

let isMore5 = arr.some((item) => item > 5);

let findSome = arr.find((item) => item === 5);

let arr4 = arr.reduce((acc, item) => {
    acc = acc + item;

    return acc;
}, 0);