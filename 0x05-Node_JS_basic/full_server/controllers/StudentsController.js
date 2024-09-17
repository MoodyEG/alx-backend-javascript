import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const printData = ['This is the list of our students'];
        data.forEach((fieldData, index) => {
          printData.push(`Number of students in ${index === 0 ? 'CS' : 'SWE'}: ${fieldData.length}. List: ${fieldData.join(', ')}`);
        });
        res.send(printData.join('\n'));
      })
      .catch((err) => {
        res.send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    if (!['SWE', 'CS'].includes(req.params.major)) {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((data) => {
          if (data.length > 0) {
            const majorIndex = req.params.major === 'CS' ? 0 : 1;
            res.send(`List: ${data[majorIndex].join(', ')}`);
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
