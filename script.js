//let execrises = ["push-ups", "sit-ups", "squats", "burpees", "plank"];

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




