var randomNumber1 = Math.floor(Math.random()*6) + 1;

var ranimg = "images/dice" + randomNumber1 + ".png";

document.querySelector("img.img1").setAttribute("src", ranimg);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var ranimg = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", ranimg);

if (randomNumber1>randomNumber2){
 document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if (randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Ayush Wins";

}