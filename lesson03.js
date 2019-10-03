// let obj = new Object();
// let person = {
//     firstName: "John",
//     "lastName": "Doe",
//     age: 22,
//     job: {
//         position: "developer",
//         company: "google"
//     }
// };
// let user = {
//     [prompt('Enter your name')]: "name",
//     [1+1]: 2
// }

// for (let key in person){
// 	console.log(key, person[key]);
// };

// console.log( Object.keys(person));

// let codes = {
//     7: "asdf",
//     22: "sdf",
//     2: "s"
// }

// for (let key in codes){
// 	console.log(key, codes[key]);
// };

// let user1 = {name: "john", age: 20};
// let user2 = {};

// for (let key in user1){
// 	user2[key] = user1[key];
// };

// console.log (user2);

// let user1 = {name: "john", age: 20};
// let user2 = {...user1}; // spread(...)

// console.log (user2);

// let user = {name: "john", age: 20};
// let {name, age} = user;
// console.log(name,age);

// let user = {name: "john", age: 20};
// let {name:firstNmae, age} = user;
// console.log(firstNmae,age);

// let user = {
//     "firstName": "John",
//     "last Name": "Doe",
//     "age": 22
// };

// console.log(JSON.stringify(user));
// console.log(JSON.parse('{"firstName":"John","last Name":"Doe","age":22}'));

// let data = [];
// let frameworks = ["java", "vue"];

// console.log(data.length);

// frameworks.push("cucumber");
// // или
// frameworks[frameworks.length]= "carrot";
// frameworks.unshift("cabbage"); // добавляем в начало

// // удаление элемента

// frameworks.pop(); //последний элемент, возвращает удаленный элемент
// frameworks.shift(); //первый элемент, возвращает удаленный элемент
// frameworks.splice(3,1); //один элемент с позиции 3, возвращает массив удаленных элементов

// let food = ["1","2","3"];
// for (let key of food) {
//     console.log(key);
// }

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for (let i=0; i <matrix.length;i++) {
//     console.log(matrix[i]);

//     for (let j = 0; j < matrix[i].length; ){
//         console.log(matrix[i][j]);
//     }
// }

// let arr = [
//     ["potato", "banana", "tomato"],
//     [15,10,5],
//     ["john", "kate", "jack"]
// ]

// let message = "";

// for (let i=0; i <arr.length; i++) {
//     // console.log(arr[i]);

//     for (let j = 0; j < arr[i].length; j++ ){
//         // console.log(arr[i][j]);

//         if (i==0 && j==2 || i==1 && j==2 || i==2 && j==1) {
//             message = message + ' ' + arr[i][j];
//         }
//     }
// }

// console.log (message);

// let obj = {};
// let message = "2" + obj;

// console.log(message);

let arr = [1,2,{}];
let message = "2" + arr;

console.log(message);


