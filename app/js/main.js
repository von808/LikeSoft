
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
	});
	$('.services__dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		vertical: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		focusOnSelect: true,
		asNavFor: '.services__slider',
	});

	$('.slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<img class="slider__arrows slider__arrows--team slider__arrows-left slider__arrows-left--team" src="../images/slider-arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider__arrows slider__arrows--team slider__arrows-right slider__arrows-right--team" src="../images/slider-arrow-right.svg" alt="arrow">',
	});

	$('.revievs__slider-items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: true,
		dots: true,
		adaptiveHeight: false,
		centerMode: false,
		variableWidth: true,
		prevArrow: '<img class="slider__arrows slider__arrows-left slider__arrows-left--revievs" src="../images/slider-arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider__arrows slider__arrows-right slider__arrows-right--revievs" src="../images/slider-arrow-right.svg" alt="arrow">',
	});
	

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

	// $('.blog__rec').slick({
  //   dots: false,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1650,
    //     settings: {
    //       slidesToShow: 8,
    //       slidesToScroll: 8,
    //     }
    //   },
    // ]
  // });

})
