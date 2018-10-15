'use strict';

let onTheFlyClass = {
    _name: 'onTheFlyClass',
    set name(newName) {
        this._name = newName;
    },
    get name() {
        return this._name;
    },
    print: function() {
        console.log(`calling print function of OTFC -> ${this.name}`);
    }
};
console.log(`onTheFlyClass name -> ${onTheFlyClass.name}`);
onTheFlyClass.name = 'newOnTheFlyClass';
onTheFlyClass.print();
console.log(`prototype of OTFC -> ${Object.getPrototypeOf(onTheFlyClass)}`);

// constructor function class
function ConstructorFunctionClass(name) {
    this._name = name;
    this.print = function() {
        console.log(`calling print function of CFC -> ${this._name}`);
    };
}
ConstructorFunctionClass.prototype = {
    set name(newName) {
        this._name = newName;
    },
    get name() {
        return this._name;
    }
};
let constructorFunctionClass = new ConstructorFunctionClass('constructorFunctionClass');
constructorFunctionClass.print();
constructorFunctionClass.name = 'newConstructorFunctionClass';
constructorFunctionClass.print();
console.log(`prototype of CFC -> ${Object.getPrototypeOf(constructorFunctionClass)}`);
console.log(`constructor of cfc -> ${constructorFunctionClass.constructor}`);

// Object.create()
let objectCreateClass = Object.create(Object.prototype, {
    _name2: {
        value: 'initial name2 of objectCreateClass',
        writable: true
    },
    name: {
        value: 'objectCreateClass',
        writable: false,        // is writable
        enumerable: true,       // is listed attribute
        configurable: false     // change attributes allowed
    },
    name2: {
        enumerable: true,
        configurable: false,
        set: function(newName) {
            this._name2 = newName;
        },
        get: function() {
            return this._name2;
        }
    },
    print: {
        value: function() {
            console.log(`calling print function of OCC -> ${this.name}`);
        }
    }
});
objectCreateClass.print();
console.log(`name2 of occ -> ${objectCreateClass.name2}`);
objectCreateClass.name2 = 'new name2 of objectCreateClass';
console.log(`name2 of occ -> ${objectCreateClass.name2}`);
for(let prop in objectCreateClass) {
    console.log(`property of OCC -> ${prop}`);
}

// new class type with setter and getter
class ItemClass {

    constructor(name)
    {
        this._name = name;
    }

    set name(newName) {
        if(typeof newName === 'string') {
            this._name = newName;
        } else {
            throw new Error('new name ist not a string');
        }
    }

    get name() {
        return this._name;
    }
}

let itemClass = new ItemClass('itemClass');
console.log(`itemClass via getter -> ${itemClass.name}`);
console.log(`itemClass via direct access -> ${itemClass._name}`);
console.log(`prototype of ItemClass -> ${ItemClass.prototype}`);
console.log(`prototype of ItemClass -> ${Object.getPrototypeOf(itemClass)}`);
console.log(`typeof itemClass -> ${typeof itemClass}`);
console.log(`instanceof itemClass -> ${itemClass instanceof ItemClass}`);

try {
    itemClass.name = 0;
} catch (error) {
    console.log(`eror name when using a number -> ${error.name}`);
    console.log(`eror message when using a number -> ${error.message}`);
}

// add properties - just add them or ...
Object.defineProperty(itemClass, 'print', {
    value: function() {
        console.log(`added print method to ItemClass -> ${this._name}`);
    }
});
itemClass.print();

// remove properties with delete

// Object -> keys(), values() and entries()

// Object -> preventExtensions(obj) / isExtensible(obj)
// Object -> seal(obj) / isSealed(obj)
// Object -> freeze(obj) / isFrozen(obj)

