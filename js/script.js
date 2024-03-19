students = [
    {
        id : 1,
        name : 'Pedro Antonio',
        email : 'pedro@abutua.com',
        tel : '(15) 99999-9999',
        course : 2,
        shift : 'Tarde'
    }
];

courses = ['Java', 'Angular', 'React'];

addRow(students);

function addRow(students){
    let table = document.getElementById("studentsTable");

    for(let student of students){
        let row = table.insertRow();

        row.insertCell().innerHTML = student.id;
        row.insertCell().innerHTML = student.name;
        row.insertCell().innerHTML = student.email;
        row.insertCell().innerHTML = student.tel;
        row.insertCell().innerHTML = courses[student.course-1];
        row.insertCell().innerHTML = student.shift;
    }
}