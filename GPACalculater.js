/* gpaCalculater([
  { subjectName: "Communication English Two", weight: 5, grade: "A" },
  { subjectName: "Applied Math 1", weight: 5, grade: "B" },
  { subjectName: "Geography of Ethiopia and The Horn", weight: 5, grade: "A" },
  { subjectName: "General Psychology", weight: 5, grade: "A+" },
  { subjectName: "Computer programming", weight: 5, grade: "A" },
  { subjectName: "Global Trends", weight: 4, grade: "A" },
  { subjectName: "Moral and Civics Education", weight: 4, grade: "A+" },
]); */

function gpaCalculater(arr) {
  console.log(arr);
  let GPA = 0.0;
  let sumOfMarks = 0;
  let totalCreditHour = 0;
  arr.forEach((subjects) => {
    let score = 0;
    converGrade(subjects.grade);
    sumOfMarks += subjects.weight * converGrade(subjects.grade);
    totalCreditHour += subjects.weight;
  });
  GPA = sumOfMarks / totalCreditHour;
  GPA = GPA.toFixed(2);
  console.log(GPA);
  return GPA;
}

function converGrade(grade) {
  let gradeScore = 0;
  switch (grade) {
    case "A+":
    case "A":
      gradeScore = 4;
      break;
    case "A-":
      gradeScore = 3.75;
      break;
    case "B+":
      gradeScore = 3.5;
      break;
    case "B":
      gradeScore = 3.0;
      break;
    case "B-":
      gradeScore = 2.75;
      break;
    case "C+":
      gradeScore = 2.5;
      break;
    case "C":
      gradeScore = 2.0;
      break;
    case "C-":
      gradeScore = 1.5;
      break;
    case "D+":
      gradeScore = 1.25;
      break;
    case "D":
      gradeScore = 1.0;
      break;
    case "D-":
      gradeScore = 0.5;
      break;
    case "F":
      gradeScore = 0.0;
      break;
    default:
      break;
  }
  return gradeScore;
}

export { gpaCalculater };
