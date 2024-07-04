import { gpaCalculater } from "./GPACalculater.js";

const calculateBtn = document.getElementById("calculate-btn");
const course = document.querySelectorAll(".content__course--item");
const gpaResultFiled = document.querySelector(".content__gpa p");
calculateBtn.addEventListener("click", calculateResult);

let gradeArray = [];

function calculateResult(e) {
  course.forEach((div) => {
    const select = div.querySelector("select");
    const input = div.querySelector("input");

    const gradeObject = {};

    gradeObject[select.id] = select.value;
    gradeObject[input.id] = Number(input.value);
    gradeArray.push(gradeObject);
  });

  checkInputVaildity(gradeArray);
  let result = gpaCalculater(gradeArray);
  gpaResultFiled.innerHTML = `GPA =  ${result}`;
  gpaResultFiled.style.color = "green";
  gradeArray = [];
}

function checkInputVaildity(gradeArr) {
  gradeArr.forEach((element, index) => {
    if (!(element.weight <= 5 && element.weight >= 1)) {
      gpaResultFiled.innerHTML = `GPA = Invaild Credit Hour for  course ${
        index + 1
      }`;
      gpaResultFiled.style.color = "red";
      element.weight = 1;
    }
  });
}
