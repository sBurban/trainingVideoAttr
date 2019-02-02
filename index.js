var botones=$(".btn");
var videoAct=document.getElementById("vidplayer")

var vid1="https://funnymemes.funnyjunk.com/comments/Blank+_059e997180da0ad9a3159b501d33c942.mp4";
var vid2="https://funnymemes.funnyjunk.com/comments/Blank+_2cbb2cff031f58332866ad1f80494647.mp4";
var vid3="https://funnymemes.funnyjunk.com/comments/Blank+_9762390558d9946cb8829e81ba167111.mp4";
var vid4="https://1eu.funnyjunk.com/comments/Let+me+help+ill+add+a+few+_847e74f402e86fcff9892ad2bb7333cd.mp4";
var vid5="https://bigcdn.funnyjunk.com/comments/Blank+_a640dd15957b1d5f3fefedbebe490406.mp4";

botones[0].addEventListener("click",pauseVideo);
for(var i=1;i<botones.length;i++){
  botones[i].addEventListener("click", handleClick);
}

function handleClick(){
  var buttonInnerHTML=this.innerHTML;
  changeVideo(buttonInnerHTML);
}

function pauseVideo(){
  if(videoAct.paused)
    videoAct.play();
  else
    videoAct.pause();
}

function changeVideo(n){

  console.log(n);
  switch (n) {
    case "1":
      videoAct.setAttribute("src", vid1);
      break;
    case "2":
      videoAct.setAttribute("src", vid2);
      break;
    case "3":
      videoAct.setAttribute("src", vid3);
      break;
    case "4":
      videoAct.setAttribute("src", vid4);
      break;
    case "5":
      videoAct.setAttribute("src", vid5);
      break;
    default:
  }
}


// function Video(src, append){
//   var v=document.createElement("video");
//   if(src !=""){
//     v.src=src;
//   }
//   if(append == true){
//     document.body.appendChild(v);
//   }
//   return v;
// }
//
// var vid1=new Video("https://funnymemes.funnyjunk.com/comments/Blank+_059e997180da0ad9a3159b501d33c942.mp4",false);
// var vid2=new Video("https://funnymemes.funnyjunk.com/comments/Blank+_2cbb2cff031f58332866ad1f80494647.mp4",false);
// var vid3=new Video("https://funnymemes.funnyjunk.com/comments/Blank+_9762390558d9946cb8829e81ba167111.mp4",false);
// var vid4=new Video("https://1eu.funnyjunk.com/comments/Let+me+help+ill+add+a+few+_847e74f402e86fcff9892ad2bb7333cd.mp4",false);
// var vid5=new Video("https://bigcdn.funnyjunk.com/comments/Blank+_a640dd15957b1d5f3fefedbebe490406.mp4",false);
