let firstName = 'Abe';
let lastName = 'Lincoln';

console.log(
`Hello 
${firstName} ${lastName}`);

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.getFullName = function() {
        return `${fname} ${lname}`
    }
}

let person1 = new Person(firstName, lastName);
console.log(person1.getFullName());

