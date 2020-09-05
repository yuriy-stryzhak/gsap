jQuery(document).ready(function($) {


	let subtitle = $(".subtitle").text().split(" ");
	$.each(subtitle, function(index, val) {
		$(".new-subtitle").append("<span class='subtitle_elem'> " +val+ " </span>");
	});

	gsap.registerPlugin(TextPlugin, ScrollTrigger);

	var tl = gsap.timeline({repeat: 0, repeatDelay: 1, delay: 1});


	tl.to(".title", {
		x: -50+"%",
		duration: 2,
		opacity: 1,
	});

	tl.to(".title", {
		duration: 1,
		rotation: -180,
		y: 1000+"%",
		opacity: 0,
		delay: 1,
	});

	tl.from(".subtitle_elem", {
		duration: 3,
		text: "",
		ease: "none",
		opacity: 1,
	})
	.to(".subtitle_elem", {
		duration: 3,
		delay: 2,
		text: "",
	});

	tl.to(".scroll", {
		duration: 1,
		ease: "none",
		opacity: 1,
		repeat: 1,
	});
	
	tl.to(".wallet", {
		duration: 1,
		opacity: 1,
	});


	gsap.timeline({
		scrollTrigger: {
			trigger: "#container",
			scrub: true,
			pin: true,
			// markers: true,
		}
	})

	.to(".scroll", {opacity: 0})

	.from(".d1", {x : innerWidth * -1})
	.from(".d2", {x : innerWidth * 1})
	.from(".d3", {x : innerWidth * -1})
	.from(".d4", {x : innerWidth * 1})
	.from(".d5", {x : innerWidth * -1})
	.from(".d6", {x : innerWidth * 1})
	.from(".d7", {x : innerWidth * -1})


});