// Get form and input elements by their HTML ids
const form = document.getElementById("gradeForm");
const input = document.getElementById("numberInput");

// Return a grade message based on the numeric score
function assignedScore(score) {
  if (score >= 90) {
    return "Wow! You earned an A.";
  } else if (score >= 80) {
    return "You earned a B.";
  } else if (score >= 70) {
    return "You earned a C.";
  } else if (score >= 60) {
    return "You earned a D.";
  } else {
    return "You earned a F.";
  }
}

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Read input value and convert it to a number
  const score = Number(input.value);

  // Get the grade message and show it in an alert
  const message = assignedScore(score);
  alert(message);
});