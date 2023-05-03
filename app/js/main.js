const handleChange = (isChecked) => {
	if (isChecked) {
		document.body.setAttribute('dark', '');
	} else {
		document.body.removeAttribute('dark');
	}
}

$(function () {

	$(".back-up, .footer__bottom").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$('.services__slider').slick({
		infinite: true,
		vertical: true,
		verticalSwiping: true,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 3000,
		asNavFor: '.services__dots',
		responsive: [
			{
				breakpoint: 840,
				settings: {
					vertical: false,
					verticalSwiping: false,
				}
			},
		]
	});
	$('.services__dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		vertical: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		focusOnSelect: true,
		asNavFor: '.services__slider',
		responsive: [
			{
				breakpoint: 840,
				settings: {
					vertical: false,
				}
			},
		]
	});

	$('.team__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		dots: false,
		adaptiveHeight: false,
		centerMode: false,
		variableWidth: true,
		prevArrow: '<img class="slider__arrows slider__arrows--team slider__arrows-left slider__arrows-left--team" src="images/slider-arrow-left.svg" alt="arrow">',
		nextArrow: '<img class="slider__arrows slider__arrows--team slider__arrows-right slider__arrows-right--team" src="images/slider-arrow-right.svg" alt="arrow">',
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					rows: 2,
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			},
		]
	});

	$('.revievs__slider-items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: false,
		centerMode: false,
		variableWidth: true,
		prevArrow: '<img class="slider__arrows slider__arrows-left slider__arrows-left--revievs" src="images/slider-arrow-left.svg" alt="arrow">',
		nextArrow: '<img class="slider__arrows slider__arrows-right slider__arrows-right--revievs" src="images/slider-arrow-right.svg" alt="arrow">',
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			},
		]
	});

	$('.blog__rec-items').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		arrows: false,
		adaptiveHeight: false,
		centerMode: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});
	$('.media-blog__rec-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: false,
		adaptiveHeight: false,
		centerMode: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});

	var mixer = mixitup('.tabs__inner', {
		animation: {
			duration: 700,
			effects: 'stagger(34ms) fade scale(0.41)',
			easing: 'ease'
		},
		load: {
			filter: '.education'
		}
	});
});

$(function () {
	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('show');
			} else {
				change.target.classList.remove('show');
			}
		});

		let options = {
			threshold: [0.5]
		};
		let observer = new IntersectionObserver(onEntry, options);
		let elements = document.querySelectorAll('.case-bg-1');
		
		for (let elm of elements) {
			observer.observe(elm);
		}
		
		let observer2 = new IntersectionObserver(onEntry, options);
		let elements2 = document.querySelectorAll('.case-bg-2');
		
		for (let elm2 of elements2) {
			observer2.observe(elm2);
		}
	}
	

});

$(function () {
	const modalBTN = document.querySelectorAll('[data-modal]');
	const body = document.body;
	const modalClose = document.querySelectorAll('.modal__close');
	const modal = document.querySelectorAll('.modal');

	modalBTN.forEach(item => {
		item.addEventListener('click', event => {
			let $this = event.currentTarget;
			let modalID = $this.getAttribute('data-modal');
			let modal = document.getElementById(modalID);
			let modalContent = modal.querySelector('.modal__content');

			modalContent.addEventListener('click', event => {
				event.stopPropagation();
			});

			modal.classList.add('show');
			$(body).toggleClass('lock');

			setTimeout(() => {
				modalContent.style.transform = 'none';
				modalContent.style.opacity = '1';
			});
		}, 1);
	});
	modalClose.forEach(item => {
		item.addEventListener('click', event => {
			let currentModal = event.currentTarget.closest('.modal');

			closeModal(currentModal);
		});
	});
	modal.forEach(item => {
		item.addEventListener('click', event => {
			let currentModal = event.currentTarget;

			closeModal(currentModal);
		});
	});
	function closeModal(currentModal) {
		let modalContent = currentModal.querySelector('.modal__content');
		modalContent.removeAttribute('style');

		setTimeout(() => {
			currentModal.classList.remove('show');
			body.classList.remove('lock');
		}, 200);
	}
});

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
		this.classList.add('dropdown__button--active');
	});

	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('show');
		} else {
			change.target.classList.remove('show');
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.case-bg-1');

for (let elm of elements) {
	observer.observe(elm);
}

let observer2 = new IntersectionObserver(onEntry, options);
let elements2 = document.querySelectorAll('.case-bg-2');

for (let elm2 of elements2) {
	observer2.observe(elm2);
}