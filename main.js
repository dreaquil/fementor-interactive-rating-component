ratingButtons = document.getElementsByClassName("rating-button");
submitBtn = document.getElementById("submit");

let currRating = null;

for (const ratingButton of ratingButtons) {
  ratingButton.addEventListener('click', event =>{
    for (const button of ratingButtons){
      button.classList.remove('rating-button-selected');
    }
    event.srcElement.classList.add('rating-button-selected');
    currRating = event.srcElement.textContent.trim()
  })
}

submitBtn.addEventListener('click', event => {
  if (currRating != null){
    questionContent = document.getElementById("question-content")
    thanksContent = document.getElementById("thanks-content")
    selectedRating = document.getElementById("selected-rating")
    selectedRating.textContent = currRating
    questionContent.hidden = true;
    thanksContent.hidden = false;
  }
})