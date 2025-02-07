/**
 * @loadPage
 */

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      // counter가 100에 도달했을 때 애니메이션 시작
      startAnimations();
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

function startAnimations() {
  gsap.to(".counter", 0.25, {
    opacity: 0,
    onComplete: function () {
      document.querySelector(".counter").remove();
    },
  });

  gsap.to(".bar", 1.5, {
    height: 0,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
    onComplete: function () {
      // bar 애니메이션이 완료된 후 overlay를 위로 이동
      gsap.to(".overlay", 0.5, {
        top: "-100%",
        ease: "power2.inOut",
        onComplete: function () {
          // 선택적: overlay를 완전히 제거하려면 아래 코드 추가
          // document.querySelector(".overlay").remove();
        },
      });
    },
  });
}
startLoader();
