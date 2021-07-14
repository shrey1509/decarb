gsap.from(".how-title",{
       scrollTrigger:{
              trigger: ".how-title",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1,
       ease: "back.out(1.2)"
});

gsap.from(".card-1",{
       scrollTrigger:{
              trigger: ".how-content",
              toggleActions: "restart none restart none"
       },
       scale:0.5,
       opacity:0,
       duration:0.5,
       ease: "back.out(1)"
});

gsap.from(".card-2",{
       scrollTrigger:{
              trigger: ".how-content",
              toggleActions: "restart none restart none"
       },
       scale:0.5,
       opacity:0,
       duration:0.5,
       ease: "back.out(1)",
       delay:0.3
});

gsap.from(".card-3",{
       scrollTrigger:{
              trigger: ".how-content",
              toggleActions: "restart none restart none"
       },
       scale:0.5,
       opacity:0,
       duration:0.5,
       ease: "back.out(1)",
       delay:0.6
});

gsap.from(".card-4",{
       scrollTrigger:{
              trigger: ".how-content",
              toggleActions: "restart none restart none"
       },
       scale:0.5,
       opacity:0,
       duration:0.5,
       ease: "back.out(1)",
       delay:0.9
});

gsap.from(".card-5",{
       scrollTrigger:{
              trigger: ".how-content",
              toggleActions: "restart none restart none"
       },
       scale:0.5,
       opacity:0,
       duration:0.5,
       ease: "back.out(1)",
       delay:1.2
});

document.getElementById('card-1').addEventListener("click",function(e) {
       gsap.to(".card-1",{scale:"1.1",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-1-no",{color:"#F0562366"});
       gsap.to(".card-1-img",{opacity:0,display:"none"});
       gsap.to(".card-1-info",{opacity:1,display:"block",delay:0.5});
       gsap.to(".card-1-info",{opacity:0,display:"none",delay:5});
       gsap.to(".card-1",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766",delay:5});
       gsap.to(".card-1-no",{color:"#CCEDFF",delay:5});
       gsap.to(".card-1-img",{opacity:1,display:"block",delay:5.5});
    });

document.getElementById('card-2').addEventListener("click",function(e) {
       gsap.to(".card-2",{scale:"1.1",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-2-no",{color:"#F0562366"});
       gsap.to(".card-2-img",{opacity:0,display:"none"});
       gsap.to(".card-2-info",{opacity:1,display:"block",delay:0.5});
       gsap.to(".card-2-info",{opacity:0,display:"none",delay:5});
       gsap.to(".card-2",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766",delay:5});
       gsap.to(".card-2-no",{color:"#CCEDFF",delay:5});
       gsap.to(".card-2-img",{opacity:1,display:"block",delay:5.5});
    });

document.getElementById('card-3').addEventListener("click",function(e) {
       gsap.to(".card-3",{scale:"1.1",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-3-no",{color:"#F0562366"});
       gsap.to(".card-3-img",{opacity:0,display:"none"});
       gsap.to(".card-3-info",{opacity:1,display:"block",delay:0.5});
       gsap.to(".card-3-info",{opacity:0,display:"none",delay:5});
       gsap.to(".card-3",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766",delay:5});
       gsap.to(".card-3-no",{color:"#CCEDFF",delay:5});
       gsap.to(".card-3-img",{opacity:1,display:"block",delay:5.5});
    });

document.getElementById('card-4').addEventListener("click",function(e) {
       gsap.to(".card-4",{scale:"1.1",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-4-no",{color:"#F0562366"});
       gsap.to(".card-4-img",{opacity:0,display:"none"});
       gsap.to(".card-4-info",{opacity:1,display:"block",delay:0.5});
       gsap.to(".card-4-info",{opacity:0,display:"none",delay:5});
       gsap.to(".card-4",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766",delay:5});
       gsap.to(".card-4-no",{color:"#CCEDFF",delay:5});
       gsap.to(".card-4-img",{opacity:1,display:"block",delay:5.5});
    });

document.getElementById('card-5').addEventListener("click",function(e) {
       gsap.to(".card-5",{scale:"1.1",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-5-no",{color:"#F0562366"});
       gsap.to(".card-5-img",{opacity:0,display:"none"});
       gsap.to(".card-5-info",{opacity:1,display:"block",delay:0.5});
       gsap.to(".card-5-info",{opacity:0,display:"none",delay:5});
       gsap.to(".card-5",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766",delay:5});
       gsap.to(".card-5-no",{color:"#CCEDFF",delay:5});
       gsap.to(".card-5-img",{opacity:1,display:"block",delay:5.5});
    });

//---------------------//
function myFunction(x) {
  if (x.matches) {
       document.getElementById("for-content-1").classList.remove("col-md-3");
       document.getElementById("for-content-2").classList.remove("col-md-3");
       document.getElementById("for-content-3").classList.remove("col-md-3");
       document.getElementById("for-content-4").classList.remove("col-md-3");
       document.getElementById("for-content-5").classList.remove("col-md-3");
       document.getElementById("for-content-6").classList.remove("col-md-3");
       document.getElementById("for-content-7").classList.remove("col-md-3");
       document.getElementById("for-content-8").classList.remove("col-md-3");
  } else {
       document.getElementById("for-content-1").classList.add("col-md-3");
       document.getElementById("for-content-2").classList.add("col-md-3");
       document.getElementById("for-content-3").classList.add("col-md-3");
       document.getElementById("for-content-4").classList.add("col-md-3");
       document.getElementById("for-content-5").classList.add("col-md-3");
       document.getElementById("for-content-6").classList.add("col-md-3");
       document.getElementById("for-content-7").classList.add("col-md-3");
       document.getElementById("for-content-8").classList.add("col-md-3");
  }
}
var x = window.matchMedia("(max-width: 768px)") ;
myFunction(x); 
x.addListener(myFunction) ;

gsap.from(".for-content",{
       scrollTrigger:{
              trigger: ".for",
              toggleActions: "restart none restart none"
       },
       scale:0.5,
       opacity:0,
       duration:0.5,
       ease: "back.out(1)",
       delay:0.5,
       stagger: 0.3
});



//------------//

gsap.from(".gallery-title",{
       scrollTrigger:{
              trigger: ".gallery-title",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1,
       ease: "back.out(1)"
});