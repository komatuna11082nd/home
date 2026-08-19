const otehon_box = document.getElementById("otehon_box");
const player_box = document.getElementById("player_box");

const  red_range = document.getElementById("red_range");
const  green_range = document.getElementById("green_range");
const  blue_range = document.getElementById("blue_range");

const  red_range_text = document.getElementById("red_range_text");
const  green_range_text = document.getElementById("green_range_text");
const  blue_range_text = document.getElementById("blue_range_text");

const  answer_button = document.getElementById("answer_button");
const  change_button = document.getElementById("change_button");

let rnd_red;
let rnd_green;
let rnd_blue;

let player_red = Number(red_range.value)*50;
let player_green = Number(red_range.value)*50;
let player_blue = Number(red_range.value)*50;
player_box.style.backgroundColor = `rgb(${player_red}, ${player_green}, ${player_blue})`;
red_range_text.textContent = player_red;
green_range_text.textContent = player_green;
blue_range_text.textContent = player_blue;

let range_step = 6

//0 ~ max-1までの乱数(整数)を返す関数
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function change_color(){

    rnd_red = getRandomInt(range_step) * 50;
    rnd_green = getRandomInt(range_step) * 50;
    rnd_blue = getRandomInt(range_step) * 50;

    console.log("R:" + rnd_red);
    console.log("G:" + rnd_green);
    console.log("B:" + rnd_blue);

    otehon_box.style.backgroundColor = `rgb(${rnd_red}, ${rnd_green}, ${rnd_blue})`;
}

//rangeの値が変わったら
red_range.addEventListener("input", function(){
    player_red = Number(red_range.value)*50;
    console.log("red_range:" + red_range.value);
    console.log("player_red:" + player_red);
    red_range_text.textContent = player_red;

    player_box.style.backgroundColor = `rgb(${player_red}, ${player_green}, ${player_blue})`;
});

green_range.addEventListener("input", function(){
    player_green = Number(green_range.value)*50;
    console.log("green_range:" + green_range.value);
    console.log("player_green:" + player_green);
    green_range_text.textContent = player_green;

    player_box.style.backgroundColor = `rgb(${player_red}, ${player_green}, ${player_blue})`;
});

blue_range.addEventListener("input", function(){
    player_blue = Number(blue_range.value)*50;
    console.log("blue_range:" + blue_range.value);
    console.log("player_blue:" + player_blue);
    blue_range_text.textContent = player_blue;

    player_box.style.backgroundColor = `rgb(${player_red}, ${player_green}, ${player_blue})`;
});

answer_button.addEventListener("click", function(){
    if(rnd_red == player_red && rnd_green == player_green && rnd_blue == player_blue){
        alert("大正解！！")
    }else{
        alert("違います")
    }
});

change_button.addEventListener("click", function(){
    change_color();
});