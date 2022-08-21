let title = '9090'
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(function(student) {
        console.log(this)
        console.log(this.title + ': ' + student);
        });
    }
};
group.showList();
console.log(this.title)