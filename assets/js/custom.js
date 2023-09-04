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
      start:"20% 20%",
      end:"100% 0%",
      scrub:1,
    //   markers:true,
    },
      x:-200,
    
    })  
})




})