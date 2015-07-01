$(function(){
  $(window).resize(rezise);
  $(function(){
    $('#player1').css({ width: $("#player1").innerWidth() + 'px', height: ($("#player1").innerWidth() * 0.5625) + 'px', "margin-top": ($(window).innerHeight()/2 - $("#player1").innerWidth()/2) });
    $('#player2').css({ width: $("#player2").innerWidth() + 'px', height: ($("#player2").innerWidth() * 0.5625) + 'px', "margin-top": ($(window).innerHeight()/2 - $("#player1").innerWidth()/2) });
    $(".play").click(function() {
      $(".pause").removeClass("active");
      player1.playVideo();
      player2.playVideo();
      $(".play").addClass("active");
    });
    $(".pause").click(function() {
      $(".play").removeClass("active");
      player1.pauseVideo();
      player2.pauseVideo();
      $(".pause").addClass("active")
    });
    $(".restart").click(function(){
      $(".play").removeClass("active");
      $(".pause").removeClass("active");
      player1.pauseVideo();
      player2.pauseVideo();
      player1.seekTo(0);
      player2.seekTo(0);
      player1.playVideo();
      player2.playVideo();
      $(".play").addClass("active");
    });
    $(".mute").click(function(){
      toggleMute();
    });
  });
});
function toggleMute(){
  if(player1.isMuted() && player2.isMuted){
    player1.unMute();
    player2.unMute();
    console.log("unmute")
    $(".mute").removeClass("active");
  }else{
    console.log("mute")
    player1.mute();
    player2.mute();
    $(".mute").addClass("active");
  }
}
function rezise(){
    $("#player1").css({ width: ($(window).innerWidth() / 2) + 'px', height: (($(window).innerWidth() / 2) * 0.5625) + 'px', "margin-top": ($(window).innerHeight()/2 - $(window).innerWidth()/4) });
    $("#player2").css({ width: ($(window).innerWidth() / 2) + 'px', height: (($(window).innerWidth() / 2) * 0.5625) + 'px', "margin-top": ($(window).innerHeight()/2 - $(window).innerWidth()/4) });
}
function onPlayerReady(event) {
       player1.playVideo();
       player2.playVideo();
       player1.unMute();
       player2.unMute();
     }
