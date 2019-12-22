$(function () {

$('.ft-tab-icon').flexTabs({
	breakpoint: 500,
	fade: 500
	
});

$('.header__btn-menu').on('click', function () {
	$('.menu ul').slideToggle();
	})
});