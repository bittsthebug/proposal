const startButton = document.getElementById("startButton");
const proposalArea = document.getElementById("proposalArea");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    proposalArea.style.display = "block";
});

yesButton.addEventListener("click", () => {
    alert("Congratulations! You've accepted my proposal. Welcome to the next level of our relationship.");
});

noButton.addEventListener("click", () => {
    alert("Oh no! That's not the response I was hoping for. Let's debug our feelings together.");
});
