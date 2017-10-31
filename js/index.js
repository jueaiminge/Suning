window.onload = function(){
	var mySwiper1 = new Swiper('.swiper-container1', {
		autoplay: 2000,//可选选项，自动滑动
		pagination : '.swiper-pagination',
		paginationElement : 'li',
		autoplayDisableOnInteraction : false,
		autoplayStopOnLast : false,
		loop:true
	})	
	var mySwiper2 = new Swiper('.swiper-container2', {
		autoplay: 2000,//可选选项，自动滑动
		direction : 'vertical',
		autoplayDisableOnInteraction : false,
		autoplayStopOnLast : false,
		loop:true
	})
	var mySwiper3 = new Swiper('.swiper-container3', {
		slidesPerView : 'auto',//'auto'
		resistanceRatio : 0.5,
		resistance : true,
	})
}
