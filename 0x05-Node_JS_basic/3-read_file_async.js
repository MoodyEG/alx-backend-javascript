const fs = require('fs').promises;

module.exports = function countStudents(path) {
  return fs.readFile(path, { encoding: 'utf8' })
    .then((data) => {
      const lines = data.split('\n').filter((line, index) => index !== 0 && line !== '').map((line) => line.split(','));
      const students = lines.map((line) => line[0]);
      const fields = Array.from(new Set(lines.map((line) => line[3])));
      console.log(`Number of students: ${students.length}`);
      fields.forEach((field) => {
        const fieldStudents = Array.from(new Set(students.filter(
          (student) => lines.find((line) => line[3] === field && line[0] === student),
        )));
        console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
      });
    })
    .catch((error) => {
      if (error) {
        throw new Error('Cannot load the database');
      }
    });
};
