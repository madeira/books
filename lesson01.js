let y = -2;
let x = y >= 0 ? y : -y;
console.log(y);

let name = 'Jhon';
let greating = `Hello ${name}`;
console.log(greating);
let char = name[1];
console.log (char);

let z = name.length;
console.log (z);


let obj = {
    name : "Jhon",
    age : 15,
    job : {
        city : "NY"
    }
};

console.log (obj.name);
console.log (obj["name"]);
console.log (obj.job.city);

obj.age = 20;

console.log (obj.age);


let arr = [1, 2, false, {}, [], null];

console.log (arr[5]);

let f = a => a; // function f (a){return a}

let f2 = a => {
    a++
    return a;
};

let f3 = (name, age) => ({
    name: name,
    age: age
});

console.log (f3("john", 21));

alert("Hello");

let promtAge = prompt("Enter your age");
let promtAge2 = +prompt("Enter your age"); // приведение типа к числу
