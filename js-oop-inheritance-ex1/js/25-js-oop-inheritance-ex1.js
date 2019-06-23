class Student {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
}

class Programmer extends Student {
    constructor(name, courses, os, languages, vcs) {
        super(name, courses);
        this.os = os;
        this.languages = languages;
        this.vcs = vcs;
    }

    isProgramingIn(language) {
        for (let i = 0; i < this.languages.length; i++) {
            if (this.languages[i].toLowerCase() === language.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

}

function whoKnowsJS(students) {
    for (let i = 0; i < students.length; i++) {
        if ((students[i] instanceof Programmer) && (students[i].isProgramingIn("javascript"))) {
            return students[i];
        }
    }
}

let student1 = new Student("Bernard", ["astronomy", "phisics", "mathematics"] );
let student2 = new Student("Charls", ["biology", "interior design", "fine arts"] );
let student3 = new Programmer("Fiona", ["graphic design", "phisics", "mathematics"], "Windows", ["javascript", "java", "c#"], "some-vcs");
let student4 = new Student("Ace", ["botanics", "phisics", "mathematics"] );
let student5 = new Student("Kippi", ["seasame street", "phisics", "mathematics"] );
let student6 = new Programmer("Yohanna", ["graphic design", "phisics", "mathematics"], "Windows", ["c++", "javascript", "java"], "some-vcs");
let student7 = new Programmer("David", ["graphic design", "phisics", "mathematics"], "Windows", ["c++", "java", "c#"], "some-vcs");

console.log(student3.isProgramingIn("c#")); //true
console.log(student6.isProgramingIn("c#")); //false

let students = [student1, student2, student3, student4, student5, student6, student7];

console.log(whoKnowsJS(students)); //student3