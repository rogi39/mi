document.addEventListener("DOMContentLoaded", function () {

	// Custom JS

});



function widthScrollBar() {
	let div = document.createElement("div");
	div.style.overflowY = "scroll";
	div.style.width = "50px";
	div.style.height = "50px";
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();
	return scrollWidth;
}

function fadeIn(el, timeout, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

function fadeOut(el, timeout) {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;
	setTimeout(() => {
		el.style.display = "none";
	}, timeout);
}


function wrapTagInDiv(el, wrapClass = 'wrapclass') {
	let div = document.createElement("div");
	div.classList.add(wrapClass);
	el.parentNode.insertBefore(div, el);
	div.appendChild(el);
}

function wrapVideoInContent() {
	let contents = document.querySelectorAll('.content');
	if (!contents) return false;
	contents.forEach(el => {
		let videos = el.querySelectorAll('iframe, video');
		videos.forEach(video => {
			wrapTagInDiv(video, 'video');
		});
		let tables = el.querySelectorAll('table');
		tables.forEach(table => {
			wrapTagInDiv(table, 'table-adaptive');
		});
	})
}
document.addEventListener("DOMContentLoaded", wrapVideoInContent);

const header = document.querySelector('.header');

const togglemenu = document.querySelector("#toggle-menu");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector('.menu__close');
const headerBlock = document.querySelector('.header__block');
if (togglemenu) {
	togglemenu.addEventListener("click", () => {
		togglemenu.classList.toggle("on");
		menu.classList.toggle("on");
		headerBlock.classList.toggle("on");
		document.body.classList.toggle("noscroll");
	});
}

document.addEventListener("DOMContentLoaded", function () {

});

document.querySelectorAll('.tel').forEach(el => {
	IMask(
		el, {
			mask: '+{7} (000) 000-00-00'
		}
	);
});


function openService(e) {
	if (e.currentTarget.classList.contains("open")) {
		e.currentTarget.closest('.filter').style.maxHeight = 50 + "px";
		e.currentTarget.classList.remove("open");
	} else {
		e.currentTarget.closest('.filter').style.maxHeight = 8 + e.currentTarget.closest('.filter').scrollHeight + "px";
		e.currentTarget.classList.add("open");
	}
}

document.querySelector('.filter__title-block').addEventListener('click', openService);


const horizontalProductSingleSlider = () => {

	let thumb = new Swiper(".clients-slider", {
		spaceBetween: 100,
		loop: true,
		// slidesPerView: 4,
		slidesPerView: 'auto',
		loop: true,
		autoplay: {
			delay: 2000,
			reverseDirection: false,
			disableOnInteraction: false
		},
		breakpoints: {
			0: {
				spaceBetween: 30,
			},
			576: {
				spaceBetween: 60,
			},
			992: {
				spaceBetween: 100,
			},
		}
		// freeMode: true,
		// watchSlidesProgress: true,
	});

}

horizontalProductSingleSlider();