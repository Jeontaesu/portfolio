$(function () {
  /**
   * @loadPage_인트로
   */
  // var textWrapper = document.querySelector(".intro-title");
  // textWrapper.innerHTML = textWrapper.textContent.replace(
  //   /([^\x00-\x80]|\w)/g,
  //   "<span class='letter'>$&</span>"
  // );

  // anime
  //   .timeline({ loop: false })
  //   .add({
  //     targets: ".intro-title .letter",
  //     translateX: [140, 0],
  //     translateZ: 0,
  //     opacity: [0, 1],
  //     easing: "easeOutExpo",
  //     duration: 600,
  //     delay: function (el, i) {
  //       return 500 + 50 * i;
  //     },
  //   })
  //   .add({
  //     targets: ".intro-title .letter",
  //     translateX: [0, -140],
  //     opacity: [1, 0],
  //     easing: "easeInExpo",
  //     duration: 700,
  //     delay: function (el, i) {
  //       return 700 + 50 * i;
  //     },
  //   });

  // TweenMax.to(".loader", 2.2, {
  //   delay: 1.3,
  //   top: "-100%",
  //   ease: Expo.easeInOut,
  // });

  /**
   * @smoothScroll
   */
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  /**
   * @header_btn_wrap링크
   */

  $(".header-btn-wrap").click(function () {
    var offset = $(".header-btn-wrap").offset(); //선택한 태그의 위치를 반환

    $("html").animate({ scrollTop: offset.top }, 400);
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
  });

  /**
   * @gnb_링크
   */

  $(".gnb-item .linkAbout").click(function (e) {
    e.preventDefault();

    var position = $(".about").offset(); //선택한 태그의 위치를 반환
    $("html").animate({ scrollTop: position.top }, 500);
    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함
  });

  /**
   * @scroll_title 이벤트
   */

  ScrollTrigger.create({
    trigger: ".sc-project",
    start: "0% 0%",
    end: "100% 0%",
    // markers:true,
  });

  $(".project-title").each(function (a, b) {
    gsap.to($(this).find(".title"), {
      scrollTrigger: {
        trigger: b,
        start: "-60% 20%",
        end: "100% 0%",
        scrub: 1,
      },
      x: -200,
    });
  });
});

/**
 * @profile_box
 */
document.addEventListener("DOMContentLoaded", () => {
  const avatarProfile = document.querySelector(".avatar-profile");
  const avatarProfileBox = document.querySelector(".avatar-profile-box");
  const closeBtn = document.querySelector(".avatar-profile-box .close-btn-wrap .btn-close");
  const avatarCon = document.querySelector(".avatar-con");

  // 현재 스크롤 위치 저장 변수
  let scrollPosition = 0;

  // 모달 내부 스크롤 관련 변수
  let startY;

  // 프로필 아바타 클릭 시 박스 표시
  avatarProfile.addEventListener("click", () => {
    // 현재 스크롤 위치 저장
    scrollPosition = window.scrollY;

    avatarProfileBox.classList.add("on");

    // 스크롤 방지
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  });

  // 닫기 버튼 클릭 시 박스 숨김
  closeBtn.addEventListener("click", () => {
    avatarProfileBox.classList.remove("on");

    // 스크롤 복원
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    document.body.style.top = "0";
    document.body.style.width = "auto";

    // 이전 스크롤 위치로 복원
    window.scrollTo(0, scrollPosition);
  });

  // 터치 시작 이벤트
  avatarCon.addEventListener(
    "touchstart",
    (e) => {
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );

  // 터치 무브 이벤트
  avatarCon.addEventListener(
    "touchmove",
    (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;

      // 컨테이너 스크롤 상단/하단 경계 체크
      if ((deltaY > 0 && avatarCon.scrollTop === 0) || (deltaY < 0 && avatarCon.scrollTop + avatarCon.clientHeight >= avatarCon.scrollHeight)) {
        e.preventDefault();
      }

      // 스크롤 업데이트
      avatarCon.scrollTop -= deltaY;
      startY = currentY;
    },
    { passive: false }
  );

  // 마우스 휠 스크롤 이벤트
  avatarCon.addEventListener("wheel", (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    avatarCon.scrollTop += delta;
  });
});
