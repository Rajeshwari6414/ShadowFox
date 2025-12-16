const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


function vote(button, player, resultId) {

  // get only buttons related to the same question
  const parent = button.parentElement;
  const buttons = parent.querySelectorAll("button");

  // remove highlight from that poll only
  buttons.forEach(btn => btn.classList.remove("voted"));

  // highlight clicked button
  button.classList.add("voted");

  // show message for that poll only
  document.getElementById(resultId).innerText =
    "You voted for " + player + " 💛";
}



