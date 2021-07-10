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

gsap.from(".card-6",{
       scrollTrigger:{
              trigger: ".how-content",
              toggleActions: "restart none restart none"
       },
       scale:0.5,
       opacity:0,
       duration:0.5,
       ease: "back.out(1)",
       delay:1.5
});




document.getElementById('card-1').addEventListener("mouseover",function(e) {
       gsap.to(".card-1",{scale:"1.2",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-1-no",{color:"#F0562366"});
    });

document.getElementById('card-1').addEventListener("mouseout",function(e) {
       gsap.to(".card-1",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766"});
       gsap.to(".card-1-no",{color:"#CCEDFF"});
    });


document.getElementById('card-2').addEventListener("mouseover",function(e) {
       gsap.to(".card-2",{scale:"1.2",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-2-no",{color:"#F0562366"});
    });

document.getElementById('card-2').addEventListener("mouseout",function(e) {
       gsap.to(".card-2",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766"});
       gsap.to(".card-2-no",{color:"#CCEDFF"});
    });



document.getElementById('card-3').addEventListener("mouseover",function(e) {
       gsap.to(".card-3",{scale:"1.2",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-3-no",{color:"#F0562366"});
    });

document.getElementById('card-3').addEventListener("mouseout",function(e) {
       gsap.to(".card-3",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766"});
       gsap.to(".card-3-no",{color:"#CCEDFF"});
    });



document.getElementById('card-4').addEventListener("mouseover",function(e) {
       gsap.to(".card-4",{scale:"1.2",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-4-no",{color:"#F0562366"});
    });

document.getElementById('card-4').addEventListener("mouseout",function(e) {
       gsap.to(".card-4",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766"});
       gsap.to(".card-4-no",{color:"#CCEDFF"});
    });



document.getElementById('card-5').addEventListener("mouseover",function(e) {
       gsap.to(".card-5",{scale:"1.2",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-5-no",{color:"#F0562366"});
    });

document.getElementById('card-5').addEventListener("mouseout",function(e) {
       gsap.to(".card-5",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766"});
       gsap.to(".card-5-no",{color:"#CCEDFF"});
    });


document.getElementById('card-6').addEventListener("mouseover",function(e) {
       gsap.to(".card-6",{scale:"1.2",color:"#F05623",backgroundColor:"#F056231A",border:"solid 1px orange"});
       gsap.to(".card-6-no",{color:"#F0562366"});
    });

document.getElementById('card-6').addEventListener("mouseout",function(e) {
       gsap.to(".card-6",{scale:"1",color:"var(--primary)",backgroundColor:"#0086C71A",border:"1px solid #0086C766"});
       gsap.to(".card-6-no",{color:"#CCEDFF"});
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