
// *DOM REVISION*
/*
let input = document.getElementById("value");
let down = document.getElementById("down");
let up = document.getElementById("up");

down.addEventListener("click", function() {
     input.value = Number(input.value) - 1;
});

up.addEventListener("click", function() {
     input.value = Number(input.value) + 1;
}); */
// OBJECTS REVISION
 /*
let player = {
    name: "alex",
    age: 25,
    health: 100,
    level: 259,
    melee: "energy blaster"
 }
 for( details in player){
     console.log(details)
 }
let extra = {
    level: 5
};
 
Object.assign(player, extra);
 console.log(player)
 ; 
 */

//  ARRAYS REVISION
/*
let weapons = ["energy blaster", "laser sword", "plasma rifle", "gravity gun"];
 weapons[0] = "gravity gun";
 weapons.push("thriple dark dagger")
 weapons.pop()
 weapons.unshift("couse of darkness")
let secondCopiedWeaponsFresh =  weapons.slice(  1   , 4);
// console.log(weapons.join("--,--") , secondCopiedWeaponsFresh);
weapons.splice(1, 2);

let japanWeapons = ["forge", "odin", "course"];

for (let japanWeapon of japanWeapons) {
    console.log(japanWeapon);
}
*//*
 let generate = document.getElementById("clicked")
 let displayOver  = document.getElementById("display")
generate.addEventListener("click" , function (){
    let comp = Math.floor(Math.random() * 5) +  1
     displayOver.value = comp;  
})*/

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let Artificial = document.getElementById("display")
let choose = document.getElementById("button-container")
let hope = document.getElementById("lose")
let picked = document.getElementById("guessed")

rock.addEventListener("click", function(){
     let gameChanger = ["paper" , "scissors" , "rock"]
        let comp = Math.floor(Math.random() * 3) 
      Artificial.value = gameChanger[comp]
      picked.value = "rock"
})

paper.addEventListener("click", function(){
   let gameChanger = ["paper" , "scissors" , "rock"]
          let comp = Math.floor(Math.random() * 3) 
      Artificial.value = gameChanger[comp]
      picked.value = "paper"
})

scissors.addEventListener("click" , function(){
   let gameChanger = ["paper" , "scissors" , "rock"]
          let comp = Math.floor(Math.random() * 3) 
      Artificial.value = gameChanger[comp]
      picked.value = "scissors"
})

choose.addEventListener("click" , function(){
  if (
    (picked.value === 'rock' && Artificial.value === 'scissors') || 
    (picked.value === 'paper' && Artificial.value === 'rock') ||
    (picked.value === 'scissors' && Artificial.value === 'paper')
  ) {
    hope.value = "win!!!!!!"; 
  } else if (
    (picked.value === 'rock' && Artificial.value === 'paper') ||
    (picked.value === 'paper' && Artificial.value === 'scissors') ||
    (picked.value === 'scissors' && Artificial.value === 'rock')
  ) {
    hope.value = "loseeeeee???";
  } else if (picked.value === Artificial.value) {
    hope.value = "It's a tie!";
  }
});