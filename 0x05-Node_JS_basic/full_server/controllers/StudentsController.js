const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const output = [];
      output.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();
      for (let i = 0; i < keys.length; i += 1) {
        output.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
      }
      response.status(200).send(output.join('\n'));
