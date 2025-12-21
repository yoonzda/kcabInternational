gsap.registerPlugin(ScrollTrigger);


let tl_search = gsap.timeline({
	scrollTrigger: {
		trigger: '.searchContainer',
		start: 'top 80%',
		end: 'bottom 20%',
	}
});
tl_search.fromTo(".searchContainer", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1});

let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.newsList',
		start: 'top 80%',
		end: 'bottom 20%',
	}
});
tl.fromTo(".newsList .item01", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1});
tl.fromTo(".newsList .item02", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "-=0.8");
tl.fromTo(".newsList .item03", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "-=0.8");
tl.fromTo(".newsList .item04", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "-=0.8");
tl.fromTo(".newsList .item05", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "-=0.8");
tl.fromTo(".newsList .item06", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "-=0.8");

let tl_quick = gsap.timeline({
	scrollTrigger: {
		trigger: '.quickMenuContainer',
		start: 'top 80%',
		end: 'bottom 20%',
	}
});
tl_quick.fromTo(".quickMenuContainer", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1});

let tl_contact = gsap.timeline({
	scrollTrigger: {
		trigger: '.contactList',
		start: 'top 80%',
		end: 'bottom 20%',
	}
});
tl_contact.fromTo(".contactList .item01", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1});
tl_contact.fromTo(".contactList .item02", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "-=0.8");
tl_contact.fromTo(".contactList .item03", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "-=0.8");