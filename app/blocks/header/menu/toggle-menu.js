// меню на 996px-360px
  let toggle = document.querySelectorAll(".menu-toggle__btn")[0];

$(window).on('load resize',windowSize);

 function windowSize(){
	if(this.innerWidth < 996){
		$('.toggle-menu').css({display: "none"});
	}

	if(this.innerWidth >= 996){
		$('.toggle-menu').removeAttr("style");
	}
}
		$(window).on('load resize',windowSize);

    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if(this.classList.contains("menu-toggle_active") !== true){

		    this.classList.add("menu-toggle_active");
		  
		    $('.toggle-menu').slideDown(500,"linear",function(){
		    	$(this).css({
			      display: "flex"
			    })
		    });
      }else {
      	this.classList.remove("menu-toggle_active");

		$('.toggle-menu').slideUp(500,"linear",function(){
				$(this).css({
			      display: "none"
			    })
		});
		
      } 

    });
 