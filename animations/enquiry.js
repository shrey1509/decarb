gsap.from(".enquiry-title",{
       scrollTrigger:{
              trigger: ".enquiry-title",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1,
       
});

gsap.from(".form-title",{
       scrollTrigger:{
              trigger: ".form-title",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1,
       ease: "back.out(1)",
       delay:0.3
});

gsap.from(".contact-fields",{
       scrollTrigger:{
              trigger: ".contact-fields",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1,
       ease: "back.out(1)",
       stagger:0.2,
       delay:0.6
});

document.getElementById('submit-link').addEventListener("mouseover",function(e) {
       gsap.to(".submit-button",{scale:"1.2",color:"#F05623"});
    });

document.getElementById('submit-link').addEventListener("mouseout",function(e) {
       gsap.to(".submit-button",{scale:"1",color:"var(--primary)"});
    });