
var randomVariable1=Math.random();
randomVariable1=randomVariable1*6+1;
randomVariable1=Math.floor(randomVariable1);
var src1="images/dice"+randomVariable1+".png"
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",src1);
var randomVariable2=Math.random();
randomVariable2=randomVariable2*6+1;
randomVariable2=Math.floor(randomVariable2);
var src2="images/dice"+randomVariable2+".png"
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",src2);

// document.querySelector("img1").setAttribute("src","images/dice"+randomVariable1+".png")
// document.querySelector("img2").setAttribute("src","images/dice"+randomVariable2+".png")
if(randomVariable1===randomVariable2)
{
    document.querySelector("h1").innerHTML="tie &#129313;";
}
else if(randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="player 1 won &#127873;";

}
else{
    document.querySelector("h1").innerHTML="player two won &#128542;";
}