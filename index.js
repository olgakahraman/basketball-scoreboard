const onePointToHomeBtn = document.querySelector("#add1pointToHome");
const twoPointsToHomeBtn = document.querySelector("#add2pointsToHome");
const threePointsToHomeBtn = document.querySelector("#add3pointsToHome");

const onePointToGuestBtn = document.querySelector("#add1pointToGuest");
const twoPointsToGuestBtn = document.querySelector("#add2pointsToGuest");
const threePointsToGuestBtn = document.querySelector("#add3pointsToGuest");

const homePointsText = document.querySelector("#homePointsText");
const guestPointsText = document.querySelector("#guestPointsText");
let countHome = 0;
let countGuest=0;

const newGameBtn = document.querySelector("#newGameBtn");

onePointToHomeBtn.addEventListener("click", function(){
countHome += 1;
homePointsText.textContent = countHome;
    })
twoPointsToHomeBtn.addEventListener("click", function () {
     countHome += 2;
     homePointsText.textContent = countHome;
   });
threePointsToHomeBtn.addEventListener("click", function () {
  countHome += 3;
  homePointsText.textContent = countHome;
});
onePointToGuestBtn.addEventListener("click", function () {
  countGuest += 1;
  guestPointsText.textContent = countGuest;
});
twoPointsToGuestBtn.addEventListener("click", function () {
  countGuest += 2;
  guestPointsText.textContent = countGuest;
});
threePointsToGuestBtn.addEventListener("click", function () {
  countGuest += 3;
  guestPointsText.textContent = countGuest;
});

newGameBtn.addEventListener("click", function(){
    countHome = 0;
    countGuest = 0;
    guestPointsText.textContent = countGuest;
    homePointsText.textContent = countHome;
})