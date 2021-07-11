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



function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("about-content").classList.remove("col-md-6");
  } else {
       document.getElementById("about-content").classList.add("col-md-6");
  }
}
var x = window.matchMedia("(max-width: 1024px)") ;
myFunction(x); // Call listener function at run time
x.addListener(myFunction) ;// Attach listener function on state changes