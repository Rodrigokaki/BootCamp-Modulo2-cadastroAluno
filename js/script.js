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

addAllRow(students);

function addAllRow(students){
    for(let student of students){
        addRow(student);
    }
}

function addRow(student){
    let table = document.getElementById("studentsTable");
    let row = table.insertRow();

    row.insertCell().innerHTML = student.id;
    row.insertCell().innerHTML = student.name;
    row.insertCell().innerHTML = student.email;
    row.insertCell().innerHTML = student.tel;
    row.insertCell().innerHTML = courses[student.course-1];
    row.insertCell().innerHTML = student.shift;
}

function save(){
    idRadio = Array.from(document.getElementsByName("radioShift")).find(r => r.checked).id;
    switch(idRadio) {
        case 'radioMorning':
          inputShift = 'Manhã'
          break;
        case 'radioEvening':
            inputShift = 'Tarde'
          break;
        case 'radioNight':
            inputShift = 'Noite'
        break;
      }

    let newStudent = {
        id : students.length + 1,
        name : document.getElementById("inputName").value,
        email : document.getElementById("inputEmail").value,
        tel : document.getElementById("inputTelephone").value,
        course : document.getElementById("inputCourse").value,
        shift : inputShift

    }

    addRow(newStudent);
    students.push(newStudent);

    document.getElementById("formStudents").reset();
}