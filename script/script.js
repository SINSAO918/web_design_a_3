let num = 0;
$(function(){
    $('.slide:gt(0)').hide()
    $('.submenu').stop().slideUp(0);
    $('.panel').hide();
    $('.popup').hide();

    setInterval(() => {
        $('.slide:first').fadeOut(1500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slidewrap')
    }, 4500);

    $('.menu>ul>li').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown(500);
    })
    $('.menu>ul>li').mouseleave(function(){
        $('.submenu').stop().slideUp(500);
    })

    $('.tab:nth-child(1)').click(function(){
        $('.notice').show();    
        $('.gallery').hide();    
        $('.tab:nth-child(1)').addClass('on')
        $('.tab:nth-child(2)').removeClass('on')
    })
    $('.tab:nth-child(2)').click(function(){
        $('.notice').hide();    
        $('.gallery').show();    
        $('.tab:nth-child(2)').addClass('on')
        $('.tab:nth-child(1)').removeClass('on')
    })

    $('.notice li:nth-child(1)').click(function(){
        $('.panel').show();
        $('.popup').show();
    })
    $('.popup button').click(function(){
        $('.panel').hide();
        $('.popup').hide();
    })
})