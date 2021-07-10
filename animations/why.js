gsap.from(".why-title",{
       scrollTrigger:{
              trigger: ".about-title",
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