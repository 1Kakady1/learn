let $arrRadio = $('.question-radio > .question-radio__checkbox'),
	$questionRadio = $('.question-radio'),
	$questionRadioLable = $('.question-radio > .question-radio__lable'),
	$titleVote = $('.poll__send'),
	$vote = null, $voteFlag = 0,
	$btnPoll = $('.poll-btn > .gen-button'),
	$progressBar = $('.progress-bar'),
	$progressBarCount = $('.progress-bar__count'),
	$progressBarProc=$('.progress-bar__proc');

progressVote();

$arrRadio.on('click', function(e){

	for(let i= 0; i< $arrRadio.length; i++){
		$arrRadio.eq(i).prop('checked', false);
	}

	$(this).prop('checked', true);

	for(let i= 0; i< $arrRadio.length; i++){
		console.log()
		if($arrRadio.eq(i)[0].checked === true){
			$vote = i;
			break;
		}
	}
});

$btnPoll.eq(0).click(function(e){
	if( $vote != null && $voteFlag == 0){
		for(let i= 0; i< $arrRadio.length; i++){
			$arrRadio.eq(i).prop('disabled', true);
			$questionRadioLable.eq(i).addClass('radio_disabled');
		}

		$titleVote.css('display','block');

		// ajax отправка .......
		
		//

		$voteFlag = 1;
		$progressBarCount.eq($vote).text(parseInt($progressBarCount.eq($vote).text())+1);
	}
});

$btnPoll.eq(1).click(function(e){
	if($voteFlag == 1) {

		progressVote();

		$progressBar.css('display', 'flex');

		for(let i = 0 ; i < $progressBar.length; i++){
			let proc = $progressBar.eq(i).attr("data-vote");
			console.log($progressBarProc.eq(i));
			$progressBarProc.eq(i).css('width', proc+'%');
		}
	}
});

function progressVote(){

	let procVoteArr = [],
		sumPeople = 0,
		countWhile = 0;

	while (countWhile < $progressBarCount.length) {
		let countVote = parseInt($progressBarCount.eq(countWhile).text());
		sumPeople += countVote;
		countWhile++;
	}

	for(let i = 0; i < $progressBarCount.length; i++ ){
		let dataVote = 100 - ((sumPeople - parseInt($progressBarCount.eq(i).text()))/100);
		//let dataVote = 100-((sumPeople/(parseInt($progressBarCount.eq(i).text())/100))/100);
		$progressBar.eq(i).attr('data-vote',dataVote);
	}
}