"use strict";

class Human {
    constructor() {
        this.name = '';
    };

    setName(userName) {
        this.name = userName;
    };

    getName() {
        alert(this.name);
    };
};

class Persone extends Human {
    constructor(){
        super();
        this.age = 0;
    }

    setAge() {
        this.age = this.age + 10;
    };

    setName() {
        let userName = prompt(`Enter a name`);
        
        if (userName) {
            super.setName(userName);
        } else {
            alert(`Name is indefined`);
            super.setName('Anonimus');
        };
    };
};

let Vasiliy = new Persone();
