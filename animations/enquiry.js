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


function myFunction(x) {
  if (x.matches) {
       document.getElementById("content-title").classList.remove("offset-md-4","col-md-6");
       document.getElementById("content-field-1").classList.remove("offset-md-4","col-md-3","offset-md-1");
       document.getElementById("content-field-2").classList.remove("offset-md-4","col-md-2");
       document.getElementById("content-field-3").classList.remove("col-md-3");
       document.getElementById("content-field-4").classList.remove("offset-md-4","col-md-3");
       document.getElementById("content-field-5").classList.remove("col-md-2");
       document.getElementById("content-field-6").classList.remove("offset-md-6","col-md-2");
  } else {
       document.getElementById("content-title").classList.add("offset-md-4","col-md-6");
       document.getElementById("content-field-1").classList.add("offset-md-4","col-md-3","offset-md-1");
       document.getElementById("content-field-2").classList.add("offset-md-4","col-md-2");
       document.getElementById("content-field-3").classList.add("col-md-3");
       document.getElementById("content-field-4").classList.add("offset-md-4","col-md-3");
       document.getElementById("content-field-5").classList.add("col-md-2");
       document.getElementById("content-field-6").classList.add("offset-md-6","col-md-2");
  }
}
var x = window.matchMedia("(min-width:768px) and (max-width: 1024px)") ;
myFunction(x); 
x.addListener(myFunction) ;