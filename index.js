// for(var i=0;i<7;i++){
// document.querySelectorAll("button")[i].addEventListener("click",function(){

//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//     // this.style.color="white";
//     // anonymous function (no name)
// });}
document.addEventListener("keydown", function(e){
soundgiver(e.key);
buttonAnimation(e.key);
// to check for keypress
});
     
function soundgiver(key){

    switch(key){
case "w":
         var crash=new Audio("sounds/crash.mp3");
         crash.play();
break;
case "a":
         var crash=new Audio("sounds/kick-bass.mp3");
         crash.play();

break;

case "s":
         var crash=new Audio("sounds/snare.mp3");
         crash.play();

break;
case "d":
         var crash=new Audio("sounds/tom-1.mp3");
         crash.play();

break;
case "j":
         var crash=new Audio("sounds/tom-2.mp3");
         crash.play();

break;
case "k":
         var crash=new Audio("sounds/tom-3.mp3");
         crash.play();

break;
case "l":
         var crash=new Audio("sounds/tom-4.mp3");
         crash.play();

break;
default:
    console.log(innerHTML);
    }
buttonAnimation(key);
}


for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var k=this.innerHTML;
        soundgiver(k);
    }
    // to check for scrreen press 
);}
 function buttonAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
// isse usme pressed animation humesha rahega
// agar usko hatana hai thodi der bad to timer lagao 
setTimeout(function(){    document.querySelector("."+currentkey).classList.remove("pressed");},100);
//100ms bad hat jayegaa

}
