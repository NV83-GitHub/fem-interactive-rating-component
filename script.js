const submitBtn = document.querySelector(".submit-btn")
const ratingState = document.querySelector(".rating-box")
const thankYouState = document.querySelector(".thank-you-state")
const scoreParent = document.querySelector(".score-btns")
let scoreResultEl = document.getElementById("score-result")


//This code allow to know wich score button was pressed by listening to event on the parent element of the buttons and then update the textContent in the score-result span

scoreParent.addEventListener("click", (e) => {
    let userReviewScore = e.target.textContent
    scoreResultEl.textContent = " " + userReviewScore
    
})


//This code change the state from choose score display to thank you display

submitBtn.addEventListener("click", function() {
    ratingState.style.display = "none"
    thankYouState.style.display= "block"
    console.log("If you read this, i wish you a good day!")
})