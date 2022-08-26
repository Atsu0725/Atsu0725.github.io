$(function(){
    $('#hiddenText').click(function(){
        if($('.hiddenText').hasClass('open')){
            $('.hiddenText').css('display','none');
            $('.hiddenText').removeClass('open');
        
        } else{
            $('.hiddenText').css('display','block');
            $('.hiddenText').addClass('open');
        }
    });

    $('a[href^="#"]').click(function(){

        let href= $(this).attr("href");
        let target=$( href == "#" || href=="" ? 'html': href);
        let position = target.offset().top;
        $('html,body').animate({
            scrollTop:position
        },600);
        return false;
    });
});
