var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player1, player2;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('player1', {
    height: '390',
    width: '640',
    videoId: video1,
    playerVars: {
      'start': startSeconds,
      'origin': 'http://multitube.cf',
    },
  });
  player2 = new YT.Player('player2', {
    height: '390',
    width: '640',
    videoId: video2,
    playerVars: {
      'start': startSeconds,
      'origin': 'http://multitube.cf',
    },
  });
}
$(function(){
  setTimeout(function(){
    player1.seekTo(startSeconds);
    player2.seekTo(startSeconds);
    setTimeout(function(){
      player1.playVideo();
      player2.playVideo();
    }, 1000);
  }, 2000);
  $(window).resize(rezise);
  $(function(){
    $('#player1').css({ width: $("#player1").innerWidth() + 'px', height: ($("#player1").innerWidth() * 0.5625) + 'px', "margin-top": ($(window).innerHeight()/2 - $("#player1").innerWidth()/2) });
    $('#player2').css({ width: $("#player2").innerWidth() + 'px', height: ($("#player2").innerWidth() * 0.5625) + 'px', "margin-top": ($(window).innerHeight()/2 - $("#player1").innerWidth()/2) });
    var firstStart = true;
    $(".play").click(function() {
      if(firstStart){
      $(".pause").removeClass("active");
      player1.playVideo();
      player2.playVideo();
      $(".play").addClass("active");
      }
    });
    var firstStart = true;
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
      player1.seekTo(startSeconds);
      player2.seekTo(startSeconds);
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

var refreshInterval1 = window.setInterval(restart, 1000);

function restart() {
  console.log(player2.getVideoLoadedFraction());
  if(player2.getVideoLoadedFraction() != 0){
    player1.seekTo(startSeconds);
    player2.seekTo(startSeconds);
    setTimeout(function(){
      player1.playVideo();
      player2.playVideo();
      player1.unMute();
      player2.unMute();
    }, 300);
    clearInterval(refreshInterval1);
    console.log("Video 2 has loaded...")
  }
  else {
    console.log("Video 2 is loading...")
    player1.seekTo(startSeconds);
    player2.seekTo(startSeconds);
    player1.pauseVideo();
    player2.pauseVideo();
    player1.mute();
    player2.mute();
  }
}
