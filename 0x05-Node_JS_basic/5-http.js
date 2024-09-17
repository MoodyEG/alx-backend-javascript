const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
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
      return output.replace(/\n$/, ''); // remove the extra newline at the end
    })
    .catch((error) => {
      if (error) {
        throw new Error('Cannot load the database');
      }
    });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      countStudents(process.argv[2])
        .then((data) => {
          res.end(`This is the list of our students\n${data}`);
        })
        .catch((error) => {
          res.end(error.message);
        });
      break;
    default:
  }
});

app.listen(1245);

module.exports = app;
