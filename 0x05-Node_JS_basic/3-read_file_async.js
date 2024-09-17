const fs = require('fs').promises;

module.exports = function countStudents(path) {
  return fs.readFile(path, { encoding: 'utf8' })
    .then((data) => {
      const lines = data.split('\n').filter((line, index) => index !== 0 && line !== '').map((line) => line.split(','));
      const students = lines.map((line) => ({ name: line[0], field: line[3] }));
      const fields = Array.from(new Set(lines.map((line) => line[3])));
      console.log(`Number of students: ${students.length}`);
      fields.forEach((field) => {
        const fieldStudents = Array.from(new Set(students.filter(
          (student) => student.field === field,
        ).map((student) => student.name)));
        console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
      });
    })
    .catch((error) => {
      if (error) {
        throw new Error('Cannot load the database');
      }
    });
};
