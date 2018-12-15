function showSliderItem(sliderIndex){

	let slCount = $('.slider-item').length;
	for(let i = 0 ; i<slCount;i++){
		$('.slider-item').eq(i).css('display','none');
	}

	$('.slider-item').eq(sliderIndex).css('display','flex');
}

showSliderItem(0);