class Person {
    constructor(name = 'Pablo') {
        this.name = name;
        // console.log('Yh a person');
    }

    greet() {
        return this.name;
    }
}

class Student extends Person {
    constructor(name, school = 'Jex', major = 'Elect') {
        super(name);
        this.school = school;
        this.major = major;
        // console.log('Yh a student');
    }

    hasMajor() {
        return !!this.major;
    }

    greet() {
        let desc = "Testing " + super.greet();
        if(this.hasMajor()) {
            desc += ', and has major of ' + this.major;
        }
        return desc;
    }
    
}

const paul = new Student();
console.log(paul.hasMajor());
console.log(paul.greet());