document.getElementById('about-link').addEventListener("click",function(e) {
       document.getElementById('about').scrollIntoView();
    });

document.getElementById('why-link').addEventListener("click",function(e) {
       document.getElementById('why').scrollIntoView();
    });

document.getElementById('how-link').addEventListener("click",function(e) {
       document.getElementById('how').scrollIntoView();
    });

document.getElementById('gallery-link').addEventListener("click",function(e) {
       document.getElementById('gallery').scrollIntoView();
    });

document.getElementById('enquiry-link').addEventListener("click",function(e) {
       document.getElementById('enquiry').scrollIntoView();
    });


document.getElementById('about-link').addEventListener("mouseover",function(e) {
       gsap.to(".about-link",{scale:"1.2",color:"#F05623"});
    });

document.getElementById('about-link').addEventListener("mouseout",function(e) {
       gsap.to(".about-link",{scale:"1",color:"var(--primary)"});
    });


document.getElementById('why-link').addEventListener("mouseover",function(e) {
       gsap.to(".why-link",{scale:"1.2",color:"#F05623"});
    });

document.getElementById('why-link').addEventListener("mouseout",function(e) {
       gsap.to(".why-link",{scale:"1",color:"var(--primary)"});
    });


document.getElementById('how-link').addEventListener("mouseover",function(e) {
       gsap.to(".how-link",{scale:"1.2",color:"#F05623"});
    });

document.getElementById('how-link').addEventListener("mouseout",function(e) {
       gsap.to(".how-link",{scale:"1",color:"var(--primary)"});
    });


document.getElementById('gallery-link').addEventListener("mouseover",function(e) {
       gsap.to(".gallery-link",{scale:"1.2",color:"#F05623"});
    });

document.getElementById('gallery-link').addEventListener("mouseout",function(e) {
       gsap.to(".gallery-link",{scale:"1",color:"var(--primary)"});
    });


document.getElementById('enquiry-link').addEventListener("mouseover",function(e) {
       gsap.to(".nav-enquiry",{scale:"1.2",color:"#F05623",border:"solid 1px #F05623"});
    });

document.getElementById('enquiry-link').addEventListener("mouseout",function(e) {
       gsap.to(".nav-enquiry",{scale:"1",color:"var(--primary)",border:"solid 1px var(--primary)"});
    });

function toggleTimes(){
       $(".togglebars").css({"display": "none"});
       $(".toggletimes").css({"display": "block"});
       }

function toggleBars(){
       $(".toggletimes").css({"display": "none"});
       $(".togglebars").css({"display": "block"});
       }


function myFunction(x) {
  if (x.matches) {
    document.getElementById("header-nav").classList.remove("ml-auto");
  } else {
       document.getElementById("header-nav").classList.add("ml-auto");
  }
}
var x = window.matchMedia("(max-width: 1024px)") ;
myFunction(x); 
x.addListener(myFunction) ;

