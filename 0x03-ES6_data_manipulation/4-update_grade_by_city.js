export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const gradeId = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeId ? gradeId.grade : 'N/A';
    return { ...student, grade };
  });
}
