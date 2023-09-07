$(function(){
  /**
   * @loadPage_인트로
   */
  var textWrapper = document.querySelector(".intro-title");
  textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
  );

  anime
      .timeline({ loop: false })
      .add({
          targets: ".intro-title .letter",
          translateX: [140, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          delay: function(el, i) {
              return 500 + 50 * i;
          }
      })
      .add({
          targets: ".intro-title .letter",
          translateX: [0, -140],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 700,
          delay: function(el, i) {
              return 700 + 50 * i;
          }
      });

  TweenMax.to(".loader", 2.2, {
      delay: 1.3,
      top: "-100%",
      ease: Expo.easeInOut
  });


  /**
   * @header_btn_wrap링크
   */
  
$('.header-btn-wrap').click(function(){

    var offset = $('.header-btn-wrap').offset(); //선택한 태그의 위치를 반환

    $('html').animate({scrollTop : offset.top}, 400);
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함

});

/**
 * @gnb_링크
 */

$('.gnb-item .linkAbout').click(function(e){
    e.preventDefault();

    var position = $('.about').offset(); //선택한 태그의 위치를 반환
    $('html').animate({scrollTop : position.top}, 500);
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함

});
$('.gnb-item .linkContact').click(function(e){
    e.preventDefault();

    var position = $('.footer').offset(); 
    $('html').animate({scrollTop : position.top}, 500);
});




/**
 * @scroll_title 이벤트
 */

ScrollTrigger.create({
    trigger:".sc-project",
    start:"0% 0%",
    end:"100% 0%",
    // markers:true,
})

$('.project-title').each(function(a,b){
  gsap.to($(this).find('.title'), {
    scrollTrigger:{
      trigger:b,
      start:"-60% 40%",
      end:"90% 0%",
      scrub:1,
    //   markers:true,
    },
      x:-200,
      stagger:0.2
    
    })  

})




})