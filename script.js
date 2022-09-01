const ratingState = document.querySelector(".ratingState");
const thankYouState = document.querySelector(".thankYouState");
const submitButton = document.querySelector(".btn");
const rated = document.querySelector(".rateNumber");
const rateButtons = document.querySelectorAll(".numbers");

rateButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    rated.textContent = btn.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (rated.textContent === "0") {
    alert("Rate something abeg");
    return; //nothing;
    //code execution stops here if rated number is 0 else the below code runs
  }

  ratingState.style.display = "none";
  thankYouState.style.display = "block";

  //this Brings back the rating page after 5 seconds and resets the rated number back to "0"
  const backToHome = () => {
    ratingState.style.display = "block";
    thankYouState.style.display = "none";
    rated.textContent = "0";
  };
  setTimeout(backToHome, 5000);
});
