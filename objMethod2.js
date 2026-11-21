let student = {
    Tamil: 90,
    English: 86,
    Maths: 78,
    total() {
        return this.Tamil + this.English + this.Maths;
    }
};

function Difference() {
    return student.Tamil - student.English;
}

console.log(student.total());
console.log(Difference());