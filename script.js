class Student {
    constructor(id, name, grades = {}) {
      this.id = id;
      this.name = name;
      this.grades = grades;
    }
  }
  

  const students = [];

  function addStudent(id, name, grades) {
    const newStudent = new Student(id, name, grades);
    students.push(newStudent);
  }

  function removeStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students.splice(index, 1);
    } else {
      console.log("id not  found");
    }
  }
  

  addStudent(1, 'Alice', { Math: 90, English: 85 });
  addStudent(2, 'Bob', { Math: 80, English: 88 });
  
  console.log(students);
  
  removeStudent(1);
  
  console.log(students);