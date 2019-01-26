function audioPalyer(){
	let currentSong = 0,
		coverImg="nota.jpg";
	$("#audioPalyer")[0].src = $("#playlist li a")[0];

	$("#playlist li a").click(function(e) {
		e.preventDefault();;
		$(".cover > img").addClass("rot");
		$("#audioPalyer")[0].src = this;
		$("#playlist li i").removeClass('fa-play');
		$("#audioPalyer")[0].play();
		$("#playlist li").removeClass('current-song');
		currentSong = $(this).parent().index();
		$(this).parent().addClass("current-song");
		$("#playlist .current-song i").addClass("fa-play");

	});

	$("#audioPalyer")[0].addEventListener("ended", function(){
		currentSong++;
		$("#playlist .current-song i").removeClass('fa-play');
		 if(currentSong==$("#playlist li a").length)
		 	currentSong=0;
		$("#playlist li").removeClass('current-song');
		$(`#playlist li:eq(${currentSong})`).addClass('current-song');
		$("#playlist .current-song i").addClass("fa-play");
		$("#audioPalyer")[0].src = $("#playlist li a")[currentSong].href;
		$("#audioPalyer")[0].play();
	});

	$("#audioPalyer")[0].addEventListener("pause", function(){
		$(".cover > img").removeClass("rot");
	});

	$("#audioPalyer")[0].addEventListener("play", function(){
		$(".cover > img").addClass("rot");
	});

}
if($("#audioPalyer")!= null && $("#audioPalyer").length!= 0){
	audioPalyer();
}
