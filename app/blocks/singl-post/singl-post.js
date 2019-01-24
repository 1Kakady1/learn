let $singlPostTab= $('.tabs-view .tabs > button'),
    $tagsViewGallery=$(".tabs-view__gallery"),
    $tabsViewVideo = $(".tabs-view__video");

$tagsViewGallery.css("display","block"); 

$singlPostTab.on('click',function(e){
    for (let index = 0; index < $singlPostTab.length; index++) {
        $singlPostTab.eq(index).removeClass("tabs_active");
    }

    $(this).addClass("tabs_active");
    let $dataIndex = $(this).data("tab");
console.log($dataIndex);
    if($dataIndex == 0){
        $tagsViewGallery.css("display","block");
        $tabsViewVideo.removeAttr("style");
    }

    if($dataIndex == 1){
        $tabsViewVideo.css("display","block");
        $tagsViewGallery.removeAttr("style");
    }
});