let $singlPostTab= $('.tabs-view .tabs > button'),
    $tagsViewGallery=$(".tabs-view__gallery"),
    $tabsViewVideo = $(".tabs-view__video");

$tagsViewGallery.css("display","block"); 

$singlPostTab.on('click',function(e){

    e.preventDefault()

    for (let index = 0; index < $singlPostTab.length; index++) {
        $singlPostTab.eq(index).removeClass("tabs_active");
    }

    $(this).addClass("tabs_active");
    let $dataIndex = $(this).data("tab");

    if($dataIndex == 0){
        $tagsViewGallery.css("display","block");
        $tabsViewVideo.removeAttr("style");
    }

    if($dataIndex == 1){
        $tabsViewVideo.css("display","block");
        $tagsViewGallery.removeAttr("style");
    }
});

///////// форма ////////

// ajax отправка
    $(".form__btn").click(function(e){
        e.preventDefault();
        alert("Проблема работы сервера")
    });
// ajax end

let $textarea = $('.comments-form .form .form-right .input'),
    $buttonComFormOtv = $(".msg-com__btn");

$buttonComFormOtv.on('click',function(e){
    e.preventDefault();
    $textarea.val($(this).data("usname")+", ") ;
});