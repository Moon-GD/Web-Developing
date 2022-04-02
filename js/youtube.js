// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//   youtube api가 함수명(onYouTubeIframeAPIReady)을 추적해서 찾기 때문에 함수명을 변경하면 안됌
function onYouTubeIframeAPIReady() {
  // 아이디명이 player인 html 객체를 찾는 유튜브 객체 메소드 (# 붙이면 안됨!)
  // 즉, <div id='player'></div>를 찾는 메소드
  new YT.Player('player', {
    // height: '360',
    // width: '640',
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜버 비디오 ID
    playerVars : {
      autoplay:true, // 자동 재생 유무
      loop:true, // 반복 재생 유무
      playlist:'An6LvWQuj_8',  // 반복 재생 loop가 true일 경우 재생할 비디오 아이디를 알려줘야 함.
    },
    events : {
      'onReady': function(event) {
        event.target.mute()  // 음소거
      }
    },
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
  });
}