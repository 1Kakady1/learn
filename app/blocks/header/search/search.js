let $searchBtn = $(".search-submit"),
    $searchBlock = $(".search"),
    $searchResultElements = $(".search-result > .search-result__item"),
    $searchInputElement=$('.search-inv__input');
    
$searchBtn.on("click", function(e) {
        e.preventDefault();

            if(this.classList.contains("search-submit_active") !== true){

                this.classList.add("search-submit_active");
            
                $searchBlock.slideDown(500,"linear",function(){
                    $(this).css({
                    display: "block"
                    })
                });
        }else {
            this.classList.remove("search-submit_active");

            $searchBlock.slideUp(500,"linear",function(){
                    $(this).css({
                    display: "none"
                    })
            });
            
        } 

});

$searchResultElements.on("click", function(e) {
    e.preventDefault();
    console.log($(this)[0].innerText);
    $searchInputElement[0].value = $(this)[0].innerText;
});

// ajax получение запросов для поиска, подстановка в .search-result > .search-result__item
    // КОД
//