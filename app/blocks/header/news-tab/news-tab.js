let $newsList = $('.marquee > .marquee__row'),
    $newsBtn = $('.button-social__btn');

newsHide(1,0);

function newsHide($m,$b){
    for (let index = 0; index <$newsList.length; index++) {
        $newsList.eq(index).css('display','none');
    }

    for (let index = 0; index <$newsBtn.length; index++) {
        $newsBtn.eq(index).removeClass("button-social__active-blue");
    }
 
    $newsList.eq($b).css('display','block');
    $newsBtn.eq($m).addClass("button-social__active-blue");
}

function searchIndexBtn($class){
    let rez = null;
    for (let index = 0; index < $newsBtn.length; index++) {
        if($newsBtn[index].lastElementChild == $class){
            rez = index;
            break;
        }
        
    }

    return rez;

}



$newsBtn.on("click", function(e) {
    let $btnIndex = searchIndexBtn($(this)[0].lastElementChild);
    newsHide($btnIndex, $btnIndex-1);
  });