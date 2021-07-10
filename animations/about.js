gsap.to(".gear-img",{rotate:180,repeat:-1,duration:3,ease:"none"});

gsap.from(".about-title",{
       scrollTrigger:{
              trigger: ".about-title",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1,
       ease: "back.out(1)"
});

gsap.from(".about-content",{
       scrollTrigger:{
              trigger: ".about-content",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1.5,
       ease: "back.out(1)",
       delay:0.5
});

