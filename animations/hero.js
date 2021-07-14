gsap.registerPlugin(ScrollTrigger);

gsap.from(".title-content",{
       scrollTrigger:{
              trigger: ".hero-title",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1.5,
       ease: "back.out(1)",
       delay:0.5
});

gsap.from(".subtitle-content",{
       scrollTrigger:{
              trigger: ".sub-content",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1.5,
       ease: "back.out(1)",
       delay: 0.7
});

gsap.from(".hero-button",{
       scrollTrigger:{
              trigger: ".hero-button",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1.5,
       ease: "back.out(1)",
       delay: 1
});

document.getElementById('hero-enquiry-link').addEventListener("mouseover",function(e) {
       gsap.to(".hero-enquiry",{scale:"1.2",color:"#F05623",border:"solid 1px #F05623"});
    });

document.getElementById('hero-enquiry-link').addEventListener("mouseout",function(e) {
       gsap.to(".hero-enquiry",{scale:"1",color:"var(--primary)",border:"solid 1px var(--primary)"});
    });
document.getElementById('hero-enquiry-link').addEventListener("click",function(e) {
       document.getElementById('enquiry').scrollIntoView();
    });