"use strict";

function Human () {
    let name;

    this.setName = function (userName) {
        name = userName;
    };

    this.getName = function () {
        alert(name);
    };
};

function Persone () {
    Human.call(this);
    
    this.age = 0;

    this.setAge = function () {
        this.age = this.age + 10;
    };

    let parentSetName = this.setName;

    this.setName = function () {
        let userName = prompt(`Enter a name`);
        
        if (userName) {
            parentSetName.call(this, userName);
        } else {
            alert(`Name is indefined`);
            parentSetName.call(this, 'Anonimus');
        };
    };
};
