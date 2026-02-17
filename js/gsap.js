gsap.registerPlugin(ScrollTrigger);


let tl_search = gsap.timeline({
	scrollTrigger: {
		trigger: '.newsContainer',
		start: 'top 80%',
		end: 'bottom 20%',
	}
});
tl_search.fromTo(".newsContainer", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1});

let tl_event = gsap.timeline({
	scrollTrigger: {
		trigger: '.eventContainer',
		start: 'top 80%',
		end: 'bottom 20%',
	}
});
tl_event.fromTo(".eventContainer", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1});

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


gsap.registerPlugin(ScrollTrigger);

const timeline = document.querySelector(".timeline");
const line = document.querySelector(".line");

gsap.to(line, {
  height: timeline.scrollHeight,
  ease: "none",
  scrollTrigger: {
    trigger: timeline,
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});

const lis = gsap.utils.toArray(".timeline li");

lis.forEach((li, i) => {
  ScrollTrigger.create({
    trigger: li,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      lis.forEach(el => el.classList.remove("active"));
      li.classList.add("active");
    },
    onEnterBack: () => {
      lis.forEach(el => el.classList.remove("active"));
      li.classList.add("active");
    }
  });
});