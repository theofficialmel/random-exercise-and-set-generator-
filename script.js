let execrises = ["push-ups", "sit-ups", "squats", "burpees", "plank"];

const generatebutton = document.getElementById("generatebutton");

function generate() {
randomindex = Math.floor(Math.random() * execrises.length);
const randomexecrise = execrises[randomindex];
document.querySelector("p").textContent = randomexecrise;
console.log(randomexecrise);
}

//function shuffle(execrises) {
    //for (let i = execrises.length - 1; i > 0; i--) {
      //  const j = Math.floor(Math.random() * (i + 1));
       // [array[i], array[j]] = [array[j], array[i]];
   // }
   // return execrises;
//}
//console.log(execrises);


let randomsets = getrandominclusive(1, 10);

function getrandominclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;


}
console.log(randomsets);


      let execrise = ["push-ups", "sit-ups", "squats", "burpees", "plank", "jumping jacks", "lunges", "mountain climbers", "high knees", "tricep dips", "bicycle crunches", "leg raises", "glute bridges", "shoulder taps", "plank jacks", "side lunges", "reverse lunges", "wall sits", "calf raises", "supermans"];
     document.getElementById("exerciseButton").onclick = function (event) {
        let randomIndex = Math.floor(Math.random() * execrise.length);
        let randomWord = execrise[randomIndex];
        console.log(randomWord, randomIndex);
        document.getElementById(
          "randomExecrsis"
        ).textContent = `random execrsis: ${randomWord}`;
        console.log(`random execrsis: ${randomWord}`);
      }

      document.getElementById("setsButton").onclick = function (randomSets) {
        randomSets = Math.floor(Math.random() * 100) + 1;
        console.log("random sets: " + randomSets);
        document.getElementById(
          "randomSets"
        ).textContent = `random sets: ${randomSets}`;

      };


    







