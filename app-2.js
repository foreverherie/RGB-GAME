const rElement = document.getElementById("r");
const gElement = document.getElementById("g");
const bElement = document.getElementById("b");

const levels= Array.from(document.getElementsByClassName ("mode"));
const squares=Array.from(document.getElementsByClassName ("square"));
const square = document.getElementById("square");

let selectedLevelButton = levels.find((level)=> {
   const classList= Array.from (level.classList);
         return classList.includes("selected");
});
    let gameLevel= selectedLevelButton.innerHTML;

levels.forEach((level=> { 
level.addEventListener("click" , function () {
levels.forEach((mode)=> mode.classList.remove("selected"));
this.classList.add ("selected");

gameLevel=this.innerHTML;

});
}));

function setTitlesAccordingToLevel (currentGameLevel) {
    if (currentGameLevel== "Easy"){
        const [a,b,c,d,e,f] =squares
        const firstThreeSquares = squares.slice (0,3)
        const  lastThreeSquares =squares.slice (3,6)

        lastThreeSquares.forEach(sq=>sq.classList.add("hidden"))
    } else if (currentGameLevel == "Hard") {
        squares.forEach(sq=>sq.classList.remove("hidden"))

    }}

const startbutton=document.getElementById("reset");
startbutton.addEventListener ("click", function () {
    for (let i=0; i<squares.length; i = i + 1){
const red = Math.floor(Math.random()*256);
const green = Math.floor(Math.random() *256);
const blue = Math.floor(Math.random() *256);
 
const rgbString ="rgb("+red+ "," + green+ "," + blue + ")";
    const square = squares[i];
    square.CDATA_SECTION_NODE.rgb_value= JSON.stringify([red ,green ,blue ])
   square.style.backgroundColor = rgbString;
    }
});
