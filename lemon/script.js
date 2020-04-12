var roll = gsap.timeline({repeat: -1});
  roll.to("#lemon", .5, {rotate: -15, transformOrigin: "center", x: -10, ease: Power1.easeInOut});
  roll.to("#shadow", .5, {delay: -.5, x: 10, ease: Power1.easeInOut});
  roll.to("#lemon", .5, {rotate: 0, transformOrigin: "center", x: 0, ease: Power1.easeInOut});
  roll.to("#shadow", .5, {delay: -.5, x: 0, ease: Power1.easeInOut});
  roll.to("#lemon", .5, {delay: -.5, rotate: 10, transformOrigin: "center", x: 5, ease: Power1.easeInOut});
  roll.to("#lemon", .5, {rotate: 0, transformOrigin: "center", x: 0, ease: Power1.easeInOut});

$("#lemon").click(function(){
  $("#lemon").css({
      "pointer-events": "none"
    });
  
  roll.pause();
  
  var cut = gsap.timeline();
    cut.to("#left", .5, {rotate: -15, transformOrigin: "bottom", ease: Bounce.easeOut});
    cut.to("#right", .5, {delay: -.5, rotate: 15, transformOrigin: "bottom", ease: Bounce.easeOut});
  
  gsap.to("#shadow", .5, {scale: 1.3, transformOrigin: "center"});

  gsap.to("#left-eye-0, #left-eye-2, #right-eye-0, #right-eye-2", .25, {opacity: 0});
  gsap.to("#left-eye-1", .25, {morphSVG: {
    shape: "#left-eye-dead",
    ease: Power3.easeOut
  }});
  gsap.to("#right-eye-1", .25, {morphSVG: {
    shape: "#right-eye-dead",
    ease: Power3.easeOut
  }});
  
  gsap.to("#left-mouth", .25, {morphSVG: {
    shape: "#left-mouth-dead",
    ease: Power3.easeOut
  }});
  gsap.to("#right-mouth", .25, {morphSVG: {
    shape: "#right-mouth-dead",
    ease: Power3.easeOut
  }});
  
  setTimeout(function(){
    gsap.to("#left-eye-0, #left-eye-2, #right-eye-0, #right-eye-2", 1, {opacity: 1});
    gsap.to("#left", 1, {rotate: 0, transformOrigin: "bottom", ease: Power3.easeInOut});
    gsap.to("#right", 1, {rotate: 0, transformOrigin: "bottom", ease: Power3.easeInOut});
    
    gsap.to("#left-eye-1", 1, {morphSVG: {
    shape: "#left-eye-1",
    ease: Power3.easeOut
    }});
    gsap.to("#right-eye-1", 1, {morphSVG: {
      shape: "#right-eye-1",
      ease: Power3.easeOut
    }});
    
    gsap.to("#left-mouth", 1, {morphSVG: {
      shape: "#left-mouth",
      ease: Power3.easeOut,
      shapeIndex: 2
    }});
    gsap.to("#right-mouth", 1, {morphSVG: {
      shape: "#right-mouth",
      ease: Power3.easeOut,
      shapeIndex: 2
    }});
  }, 1200);
  
  setTimeout(function(){
    roll.play();
    gsap.to("#shadow", .5, {scale: 1});
    
    $("#lemon").css({
      "pointer-events": "all"
    });
  }, 1800);
});