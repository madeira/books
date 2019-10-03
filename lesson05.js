// let user = {
//     name: 'John',
//     age: 15,
//     getInfo: function (lastName) {
//         return 'Hello' + ' ' + this.name + ' ' + lastName + ' ' + this.age;
//     },
// };

// let user2 = {
//     name: 'Kate',  
//     age: 20,
// }

// console.log(user.getInfo.call(user2, 'Burger'));
// console.log(user.getInfo.apply(user2, ['Burger']));

// let userLastName = user.getInfo.bind(user2, 'Burger');

// console.log(userLastName());

//  bind каррирование

// есть 5 дней, есть средняя затрата в день, например 58, есть бюджет 187, пробежаться по 5 дням, определить когда 
// закончится бюджет и уйдете в минус

let maneyByDay = 58;
let budjet = 187;
let daysCount = 0;

function calc(count) {
    budjet = budjet - maneyByDay;
    count--;
    daysCount++;

    if ( budjet > 0 ) {
        return calc(count);
    };

    return 'через' + ' ' + daysCount + ' ' + 'дней закончится бюджет';
};

console.log (calc(5));