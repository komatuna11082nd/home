const title = document.getElementById("title");

//0 ~ maxまでの乱数(整数)を返す
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

rnd = getRandomInt(10)
console.log(rnd)

if (rnd==0){
    title.textContent = "びよ～～～～～ん"
}