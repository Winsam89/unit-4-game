// Global Variables
let yourScore = document.querySelector(".yourScore")
let crystalOne = document.querySelector(".crystalOne")
let crystaTwo = document.querySelector(".crystalTwo")
let crystaThree = document.querySelector(".crystaThree")
let crystalFour = document.querySelector(".crystalFour")

// generate random number from 20 to 100
let ranNumber = Math.floor(Math.random() * (100-20) + 20);


// Random Number 
document.querySelector(".ranNumber").innerHTML = ranNumber;


yourScore.innerHTML = 0;
// generate random numbers for 4 crystals from 1 to 12
document.crystal1 = crystalRanNum(1, 12);
document.crystal2 = crystalRanNum(1, 12);
document.crystal3 = crystalRanNum(1, 12);
document.crystal4 = crystalRanNum(1, 12);

function crystalRanNum(min, max) {
  return Math.floor(Math.random()*(12-1)+1);
}

// console.log(crystal1);
// console.log(crystal2);
// console.log(crystal3);
// console.log(crystal4);


// On click Add crystal value to yourScore
document.querySelector('#crystalOne').addEventListener('click', (event)=> {
  console.log(crystal1);
  addToScore(document.crystal1)
})


// var addedNumber = ranNumber;

function addToScore(value) {
  console.log(value)
  yourScore.innerHTML = parseInt(yourScore.innerHTML) + value 
}


//   console.log(addedNumber)
// }
  

// function addToScore() {
// (yourScore + crystal1); 

// addToScore.addEventListener('click', function() {
//   (addToScore = yourScore + crystal1);
// });
// addToScore();







// if yourScore = to random number ++ wins and game resets

// if yourScore > random number ++ lost and game resets


