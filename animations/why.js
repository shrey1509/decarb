gsap.from(".why-title",{
       scrollTrigger:{
              trigger: ".why-title",
              toggleActions: "restart none restart none"
       },
       x:'-100vw',
       duration:1,
       ease: "back.out(1.2)"
});


gsap.from(".why-loss",{
	scrollTrigger:{
		trigger: ".why-content",
		toggleActions: "restart none restart none"
	},
	opacity: 0,
	y:-100,
	duration:1.5,
	ease:"power4.out"
});
gsap.from(".why-smoke",{
	scrollTrigger:{
		trigger: ".why-content",
		toggleActions: "restart none restart none"
	},
	opacity: 0,
	x:100,
	duration:1.5,
	delay:0.3,
	ease:"power4.out"
});
gsap.from(".why-poor",{
	scrollTrigger:{
		trigger: ".why-content",
		toggleActions: "restart none restart none"
	},
	opacity: 0,
	duration:1.5,
	delay:0.6,
	ease:"power4.out"
});
gsap.from(".why-laggy",{
	scrollTrigger:{
		trigger: ".why-content",
		toggleActions: "restart none restart none"
	},
	opacity: 0,
	x:-100,
	duration:1.5,
	delay:0.9,
	ease:"power4.out"
});
gsap.from(".why-blocked",{
	scrollTrigger:{
		trigger: ".why-content",
		toggleActions: "restart none restart none"
	},
	opacity: 0,
	y:100,
	duration:1.5,
	delay:1.2,
	ease:"power4.out"
});

document.getElementById('why-loss').addEventListener("mouseover",function(e) {
       gsap.to(".why-loss",{borderBottom:"solid 7px #F05623"});
    });

document.getElementById('why-loss').addEventListener("mouseout",function(e) {
       gsap.to(".why-loss",{borderBottom:"none"});
    });

document.getElementById('why-smoke').addEventListener("mouseover",function(e) {
       gsap.to(".why-smoke",{borderBottom:"solid 7px #F05623"});
    });

document.getElementById('why-smoke').addEventListener("mouseout",function(e) {
       gsap.to(".why-smoke",{borderBottom:"none"});
    });
document.getElementById('why-poor').addEventListener("mouseover",function(e) {
       gsap.to(".why-poor",{borderBottom:"solid 7px #F05623"});
    });

document.getElementById('why-poor').addEventListener("mouseout",function(e) {
       gsap.to(".why-poor",{borderBottom:"none"});
    });
document.getElementById('why-laggy').addEventListener("mouseover",function(e) {
       gsap.to(".why-laggy",{borderBottom:"solid 7px #F05623"});
    });

document.getElementById('why-laggy').addEventListener("mouseout",function(e) {
       gsap.to(".why-laggy",{borderBottom:"none"});
    });
document.getElementById('why-blocked').addEventListener("mouseover",function(e) {
       gsap.to(".why-blocked",{borderBottom:"solid 7px #F05623"});
    });

document.getElementById('why-blocked').addEventListener("mouseout",function(e) {
       gsap.to(".why-blocked",{borderBottom:"none"});
    });