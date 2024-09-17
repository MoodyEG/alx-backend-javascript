const express = require('express');
const fs = require('fs');

const app = express();
const hostname = 'localhost';
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
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
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let out = 'This is the list of our students\n';
  await countStudents(process.argv[2])
    .then((output) => {
      out += output;
      res.end(out);
    })
    .catch((error) => {
      out += error.message;
      res.statusCode = 500;
      res.end(out);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
