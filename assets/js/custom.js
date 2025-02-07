$(function () {
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
 * @mouseCursor
 */
document.addEventListener("DOMContentLoaded", () => {
  const avatarProfile = document.querySelector(".avatar-profile");
  const avatarProfileBox = document.querySelector(".avatar-profile-box");
  const closeBtn = document.querySelector(".avatar-profile-box .close-btn-wrap .btn-close");
  const avatarCon = document.querySelector(".avatar-con");
  const wrapper = document.querySelector("#wrapper");

  // 현재 스크롤 위치 저장 변수
  let scrollPosition = 0;
  let isModalOpen = false; // 모달 상태를 추적하는 변수 추가

  // 프로필 아바타 클릭 시 박스 표시
  avatarProfile.addEventListener("click", () => {
    // 현재 스크롤 위치 저장
    scrollPosition = window.scrollY;
    isModalOpen = true; //모달 열림 상태 설정

    avatarProfileBox.classList.add("on");

    // 스크롤 방지
    wrapper.style.position = "fixed";
    wrapper.style.width = "100%";
    wrapper.style.top = `-${scrollPosition}px`;

    // body는 overflow만 처리
    document.body.style.overflow = "hidden";
  });

  // 닫기 버튼 클릭 시 박스 숨김
  closeBtn.addEventListener("click", () => {
    avatarProfileBox.classList.remove("on");

    // 스크롤 복원
    wrapper.style.position = "";
    wrapper.style.width = "";
    wrapper.style.top = "";
    document.body.style.overflow = "auto";

    // 이전 스크롤 위치로 복원
    window.scrollTo(0, scrollPosition);
  });

  // 커스텀 커서 위치 보정을 위한 함수
  const adjustCursorPosition = (mousePos) => {
    if (avatarProfileBox.classList.contains("on")) {
      return {
        x: mousePos.x,
        y: mousePos.y + scrollPosition,
      };
    }
    return mousePos;
  };

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

      if ((deltaY > 0 && avatarCon.scrollTop === 0) || (deltaY < 0 && avatarCon.scrollTop + avatarCon.clientHeight >= avatarCon.scrollHeight)) {
        e.preventDefault();
      }

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

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
  const lineEq = (y2, y1, x2, x1, currentVal) => {
    let m = (y2 - y1) / (x2 - x1);
    let b = y1 - m * x1;
    return m * currentVal + b;
  };
  const lerp = (a, b, n) => (1 - n) * a + n * b;
  const body = document.body;
  const bodyColor = getComputedStyle(body).getPropertyValue("--color-bg").trim() || "white";
  const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    return { x: posx, y: posy };
  };

  // Window sizes.
  let winsize;
  const calcWinsize = () => (winsize = { width: window.innerWidth, height: window.innerHeight });
  calcWinsize();
  // Recalculate window sizes on resize.
  window.addEventListener("resize", calcWinsize);

  // Custom mouse cursor.
  class CursorFx {
    constructor(el) {
      this.DOM = { el: el };
      this.DOM.dot = this.DOM.el.querySelector(".cursor__inner--dot");
      this.DOM.circle = this.DOM.el.querySelector(".cursor__inner--circle");
      this.bounds = { dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect() };
      this.scale = 1;
      this.opacity = 1;
      this.mousePos = { x: 0, y: 0 };
      this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
      this.lastScale = 1;
      this.lastOpacity = 1;

      this.initEvents();
      requestAnimationFrame(() => this.render());
    }
    initEvents() {
      window.addEventListener("mousemove", (ev) => {
        const rawMousePos = getMousePos(ev);
        this.mousePos = adjustCursorPosition(rawMousePos);
      });
    }
    render() {
      this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1);
      this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1);
      this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15);
      this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15);
      this.lastScale = lerp(this.lastScale, this.scale, 0.15);
      this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
      this.DOM.dot.style.transform = `translateX(${this.lastMousePos.dot.x}px) translateY(${this.lastMousePos.dot.y}px)`;
      this.DOM.circle.style.transform = `translateX(${this.lastMousePos.circle.x}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
      this.DOM.circle.style.opacity = this.lastOpacity;
      requestAnimationFrame(() => this.render());
    }
    enter() {
      cursor.scale = 1.5;
    }
    leave() {
      cursor.scale = 1;
    }
    click() {
      this.lastScale = 1;
      this.lastOpacity = 0;
    }
  }

  const cursor = new CursorFx(document.querySelector(".cursor"));

  // Custom cursor chnages state when hovering on elements with 'data-hover'.
  [...document.querySelectorAll("[data-hover]")].forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.enter());
    link.addEventListener("mouseleave", () => cursor.leave());
    link.addEventListener("click", () => cursor.click());
  });
});
