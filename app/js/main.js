
const handleChange = (isChecked) => {
	if (isChecked) {
		document.body.setAttribute('dark', '');
	} else {
		document.body.removeAttribute('dark');
	}
}

$(function () {

  $(".back-up, .footer__bottom").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.services__slider').slick({
    infinite: true,
		vertical: true,
		verticalSwiping: true,
		arrows: false,
    asNavFor: '.services__dots',
  });
	$('.services__dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
		vertical: true,
    focusOnSelect: true,
    asNavFor: '.services__slider',
  });

})
