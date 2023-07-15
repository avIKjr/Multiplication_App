//*getting two different num between 1-10
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
//*getting all the elements
const formEl = document.getElementById("form");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
//*get data from localStorage and as it was in string making it number
let score = JSON.parse(localStorage.getItem("score"));
//*if the score is not equal to anything then set it to 0
if (!score) {
  score = 0;
}
//*handling the score element
scoreEl.innerHTML = `Score: ${score}`;
//*handling the Question element
questionEl.innerHTML = `What is ${num1} Multiply by ${num2}?`;
//!generating the correct ans
const correctAns = num1 * num2;
//*main function which checks if the user ans and correct ans matches or not
formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
//!this sets the score in local storage and stringify it
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
