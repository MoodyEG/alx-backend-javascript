const express = require('express');
const fs = require('fs').promises;

const app = express();
const hostname = 'localhost';
const port = 1245;

async function countStudents(path) {
  return fs.readFile(path, { encoding: 'utf8' })
    .then((data) => {
      const lines = data.split('\n').filter((line, index) => index !== 0 && line !== '').map((line) => line.split(','));
      const students = lines.map((line) => ({ name: line[0], field: line[3] }));
      const fields = Array.from(new Set(lines.map((line) => line[3])));
      let output = `Number of students: ${students.length}\n`;
      fields.forEach((field) => {
        const fieldStudents = Array.from(new Set(students.filter(
          (student) => student.field === field,
        ).map((student) => student.name)));
        output += `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}\n`;
      });
      return output;
    })
    .catch((error) => {
      if (error) {
        throw new Error('Cannot load the database');
      }
    });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const output = await countStudents(process.argv[2]);
  res.send(output);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
