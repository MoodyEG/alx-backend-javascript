interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Captain",
  lastName: "Hamada",
  age: 24,
  location: "Egypt",
};

const student2: Student = {
  firstName: "3lawi",
  lastName: "7beb Glby Abo 7sen",
  age: 24,
  location: "Lol",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  table.appendChild(row);
});
