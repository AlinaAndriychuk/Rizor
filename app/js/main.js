"use strict";

$(function() {
  $(".header__burger-menu").on("click", function() {
    $(".header__menu").toggleClass("open-menu");
  });

  $(".header__link-item").on("click", function(event) {
    let anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 30 + "px"}, 777);
    $(".header__menu").removeClass("open-menu");

    event.preventDefault();
    return false;
  }); 
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".header__logo", {duration: 1, opacity: 0, y: -100});
  gsap.from(".header__item", {duration: 1, delay: 0.5, opacity: 0, y: 70, stagger:{amount: 0.5}})

  gsap.from(".header .video__poster", {duration: 2, delay: 1, opacity: 0, x: 800});
  gsap.to(".header .video__controls", {duration: 0.8, delay: 1.5, opacity: 1});
  gsap.to(".header .video__play", {duration: 2, delay: 1, rotateZ: 360});
  gsap.from(".header__text", {duration: 1, delay: 2, opacity: 0, y: 150});
  gsap.to(".modes .video__controls", {duration: 0, opacity: 1});

  gsap.to(".advantages__video", {
    scrollTrigger: {
      trigger: ".advantages__video",
      toggleActions: "restart reset restart none"
    },
    duration: 2,
    left: 0
  });

  gsap.from(".feature__image", {
    scrollTrigger: {
      trigger: ".feature__image",
      toggleActions: "restart reset restart reset"
    },
    duration: 2,
    opacity: 0,
    rotationY: 90
  })

  gsap.from(".feature__palette-color", {
    scrollTrigger: {
      trigger: ".feature__palette-color",
      toggleActions: "restart reverse restart reverse"
    },
    opacity: 0,
    stagger: {amount: 1.5}
  });

  gsap.from(".advantages .feature__item", {
    scrollTrigger: {
      trigger: ".advantages .feature__item",
      toggleActions: "restart reverse restart reverse"
    },
    duration: 1,
    delay: 0.5,
    opacity: 0,
    x: 100,
    stagger: {amount: 0.5}
  });

  gsap.from(".modes .video__poster", {
    scrollTrigger: {
      trigger: ".modes .video__poster",
      toggleActions: "restart resume restart none",
    },
    duration: 2,
    opacity: 0,
    x: 800
  });

  gsap.to(".modes .video__play", {
    scrollTrigger: {
      trigger: ".modes .video__play",
      toggleActions: "restart reset restart reset",
    },
    duration: 2,
    rotateZ: 360,
    opacity: 1,
  });

  gsap.from(".modes .feature__item", {
    scrollTrigger: {
      trigger: ".modes .feature__item",
      toggleActions: "restart reverse restart reset"
    },
    duration: 1,
    opacity: 0,
    x: 100,
    stagger: {amount: 0.5}
  });

  gsap.from(".feature__indicators", {
    scrollTrigger: {
      trigger: ".feature__indicators",
      toggleActions: "restart reverse restart reset"
    },
    duration: 1,
    opacity: 0,
    x: -100,
    stagger: {amount: 0.5}
  });

  gsap.from(".footer__text", {
    scrollTrigger: {
      trigger: ".footer__text",
      toggleActions: "restart reverse restart reset"
    },
    duration: 1,
    opacity: 0,
    x: -100,
    stagger: {amount: 0.5}
  });

  gsap.from(".footer__image", {
    scrollTrigger: {
      trigger: ".footer__image",
      toggleActions: "restart pause restart reset"
    },
    duration: 2,
    opacity: 0,
    x: 800
  });

  gsap.from(".footer__link", {
    scrollTrigger: {
      trigger: ".footer__link",
      toggleActions: "restart reverse restart pause"
    },
    duration: 2,
    x: 100
  });

});  