import * as fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n').filter(
          (line, index) => index !== 0 && line !== '',
        ).map((line) => line.split(','));
        const fields = Array.from(new Set(lines.map((line) => line[3])));
        const studentsPerField = fields.reduce((result, field) => {
          lines.filter(
            (line) => line[3] === field,
          ).map((line) => line[0]);
          return result;
        }, {});
        resolve(studentsPerField);
      }
    });
  });
}

export default { readDatabase };
