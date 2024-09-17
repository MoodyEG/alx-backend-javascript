import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const printData = ['This is the list of our students'];
        const fields = Object.keys(data).sort(
          (a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1),
        );
        fields.forEach((field) => {
          printData.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
        });
        res.status(200).send(printData.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    if (!['SWE', 'CS'].includes(req.params.major)) {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((data) => {
          if (Object.keys(data).length > 0) {
            res.send(`List: ${data[req.params.major].join(', ')}`);
          } else {
            res.status(500).send('Cannot load the database');
          }
        })
        .catch((err) => {
          res.send(err.message);
        });
    }
  }
}
