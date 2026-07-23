const gradeForm = document.querySelector("#gradeForm");
const scoreInput = document.querySelector("#score");
const gradeResult = document.querySelector("#gradeResult");

gradeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const score = Number(scoreInput.value);

  if (!Number.isFinite(score) || score < 0 || score > 100) {
    gradeResult.textContent = "Enter a score from 0 to 100";
    gradeResult.className = "result red";
    return;
  }

  const grade =
    score >= 90
      ? "A"
      : score >= 80
        ? "B"
        : score >= 70
          ? "C"
          : score >= 50
            ? "D"
            : "F";
  gradeResult.textContent = `Score: ${score} - Grade ${grade}`;
  gradeResult.className = `result ${grade === "F" ? "red" : grade === "D" ? "orange" : "green"}`;
});