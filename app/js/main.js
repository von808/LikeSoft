$(function () {
	const handleChange = (isChecked) => {
		if (isChecked) {
			document.body.setAttribute('dark', '');
		} else {
			document.body.removeAttribute('dark');
		}
	}
});

// function appear() {
// 	(function() {
// 	  'use strict';
// 	  var nodes = [];
  
// 	  alert("asd");
	  
// 	  function addClass(el) {
// 		if (el.classList) {
// 		  el.classList.add('appeared');
// 		} else {
// 		  // IE9 compat
// 		  el.className += 'case' + 'appeared';
// 		}
// 	  }
  
// 	  // set the image src or background attribute
// 	  function doReveal(el) {
// 		var orig = el.getAttribute('src') || false;
  
// 		el.addEventListener('error', function handler(e) {
// 		  // on error put back the original image if available (usually a placeholder)
// 		  console.log('error loading image', e);
// 		  if (orig) {
// 			el.setAttribute('src', orig);
// 		  }
// 		  el.removeEventListener('error', handler); // hate this.
// 		});
  
// 		var src = el.getAttribute('data-src');
// 		if (src) {
// 		  el.setAttribute('src', src);
// 		  addClass(el);
// 		  return;
// 		}
// 		src = el.getAttribute('data-bkg');
// 		if (src) {
// 		  el.style.backgroundImage = 'url("' + src + '")';
// 		  addClass(el);
// 		  return;
// 		}
// 	  }
  
// 	  // find what element to work with, as we support containers of images
// 	  function reveal(el) {
// 		if (el.hasChildNodes()) {
// 		  // dealing with a container try and find children
// 		  var els = el.querySelectorAll('[data-src], [data-bkg]');
// 		  var elsl = els.length;
// 		  if (elsl === 0) {
// 			// node has children, but none have the attributes, so reveal
// 			// the node itself (use case: div with a background)
// 			doReveal(el);
// 		  } else {
// 			for (var j = 0; j < elsl; j++) {
// 			  doReveal(els[j]);
// 			}
// 		  }
// 		} else {
// 		  doReveal(el);
// 		}
// 	  }
  
// 	  // reveal an image after a specified timeout
// 	  function delayAppear(el, delay) {
// 		setTimeout(function() {
// 		  reveal(el);
// 		}, delay);
// 	  }
  
// 	  return {
// 		// function executed when dom is interactive
// 		init: function init() {
// 		  // find all elements with the class "appear"
// 		  var els = document.getElementsByClassName('appear');
// 		  var elsl = els.length;
// 		  //  put html elements into an array object to work with
// 		  for (var i = 0; i < elsl; i += 1) {
// 			// some images are revealed on a simple timeout, instead of
// 			// viewport appears. These delays appears must have
// 			// the appear class on them directly
// 			var delay = els[i].getAttribute('data-delay');
// 			if (delay) {
// 			  delayAppear(els[i], delay);
// 			} else {
// 			  nodes.push(els[i]);
// 			}
// 		  }
// 		},
// 		elements: nodes,
// 		// function to run when an element is determined to be in view
// 		appear: reveal,
// 		// larger bounds area for reveal images
// 		bounds: 200
// 	  };
  
// 	}())
// }

$(function() {
	
	// var cases = $(".case");

	// $('.cases').appear();
	
	// $('.cases').on('appear', function(event, $all_appeared_elements){
	// 	cases.addClass("appeared");
	// });
	// $('.cases').on('disappear', function(event, $all_disappeared_elements){
	// 	cases.removeClass("appeared");
	// });
	
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