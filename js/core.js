$(document).ready(function(){
    $('button.btnMenu').click(activeToggleClass);
    $('button.btnMenu').click(function(){
        $('.menuMobilePanel').toggleClass('active');
        $('.menuDep01List li ul').hide();
        $('.menuDep01List h3').parent().siblings().removeClass('active');
    });
    $('footer .customSelect button').click(activeToggleClass);

    $('.langWrap').mouseenter(activeAddClass);
    $('.langWrap').mouseleave(activeRemoveClass);

    $('.dep02List li').hover(activeToggleClass);

    // menuDropPanel();
    // siteMapFunction();
    customSelect();
    customSelectSub();
    tabButtonFunction();
    accordionFunction();
    mediatorPopFunction();
});

function activeAddClass(){
    $(this).addClass('active');
}
function activeRemoveClass(){
    $(this).removeClass('active');
}
function activeToggleClass(){
    $(this).toggleClass('active');
}

function menuDropPanel(){
    $('.menuDefault nav').mouseenter(function(){
        $('.menuDropPanel').addClass('active');
    });

    $('.header').mouseleave(function(){
        $('.menuDropPanel').removeClass('active');
    });

    $('.menuDropPanel ol>li').mouseenter(function(){
        var dep2Index = $(this).index();
        $('.menuDefault nav ul li').removeClass('active');
        $('.menuDefault nav ul li:nth-of-type('+ (dep2Index+1) +')').addClass('active');
    });
    $('.menuDropPanel').mouseleave(function(){
        $('.menuDefault nav ul li').removeClass('active');
        $('.menuDropPanel').removeClass('active');
    });

    $('.menuDefault nav ul li').mouseenter(function(){
        var dep1Index = $(this).index();
        $('.menuDefault nav ul li').removeClass('active');
        $(this).addClass('active');
        $('.menuDropPanel ol>li').removeClass('active');
        $('.menuDropPanel ol>li:nth-of-type('+ (dep1Index+1) +')').addClass('active');
    });
    $('.menuDefault nav ul li').mouseleave(function(){
        $('.menuDefault nav ul li').removeClass('active');
        $('.menuDropPanel ol>li').removeClass('active');
    });
}

function siteMapFunction(){
    $('.menuDep01List li ul').hide();
    $('.menuDep01List h3').click(function() {
        $('.menuDep01List h3+ul').stop().slideUp(300);
        $(this).parent().siblings().removeClass('active');
        $(this).next('.menuDep01List h3+ul').stop().slideToggle(300);
        $(this).parent().toggleClass('active');
    });
}

function customSelect(){
    $('footer .customSelect button').click(function(){
        console.log(1);
        $(this).siblings().toggleClass('active');
    });
}

function customSelectSub(){
    $('.subContent>ol button').click(function(){
        console.log(1);
        $(this).siblings().toggleClass('active');
    });
}

function tabButtonFunction(){
    $('.tabButtonBox button').click(function(){
        var tabID = $(this).attr('data-tabName');

        $('.tabButtonBox button').removeClass('active');
        $(this).addClass('active');

        $('.tabContent').removeClass('active');
        $('#'+tabID).addClass('active');

    });

    $('.subTabButtonBox button').click(function(){
        var tabID = $(this).attr('data-tabName');

        $('.subTabButtonBox button').removeClass('active');
        $(this).addClass('active');

        $('.subTabContent').removeClass('active');
        $('#'+tabID).addClass('active');

    });
    
    $('.rulesTabButton button').click(function(){
        var tabID = $(this).attr('data-tabName');

        $('.rulesTabButton li').removeClass('active');
        $(this).parent().addClass('active');

        $('.rulesTabContent').removeClass('active');
        $('#'+tabID).addClass('active');

    });
}

function accordionFunction(){
    $('.listType4 .faq_answer_box').hide();
    $('.listType4 h4').click(function() {
        $('.faq_answer_box').stop().slideUp(300);
        $(this).parents().siblings().removeClass('active');
        $(this).next('.faq_answer_box').stop().slideToggle(300);
        $(this).parents().toggleClass('active');
    });

    $('.listType7 .accordionContent').hide();
    $('.listType7 .accordionBox').click(function() {
        $('.accordionContent').stop().slideUp(300);
        $(this).parents().siblings().removeClass('active');
        $(this).next('.accordionContent').stop().slideToggle(300);
        $(this).parents().toggleClass('active');
    });
    
    $('.listType12 .listType13').hide();
    $('.listType12 h4').click(function() {
        $('.listType13').stop().slideUp(300);
        $(this).parents().siblings().removeClass('active');
        $(this).next('.listType13').stop().slideToggle(300);
        $(this).parents().toggleClass('active');
    });

    $('.listType13 .listType14').hide();
    $('.listType13 .accordionContent').click(function() {
        $('.listType14').stop().slideUp(300);
        $(this).parents().siblings().removeClass('active');
        $(this).next('.listType14').stop().slideToggle(300);
        $(this).parents().toggleClass('active');
    });
}

function mediatorPopFunction(){
    $('.mediatorTable button').click(function(){
        $('.mediator.pop').addClass('active');
    });

    $('.mediator.pop button').click(function(){
        $('.mediator.pop').removeClass('active');
    });

    $('.cardList>li').click(function(){
        $('.mediator.pop').addClass('active');
    });
}

const mediaQuery = window.matchMedia("(max-width: 1279px)");

function handleMediaQuery(e) {
  if(e.matches){
    console.log(1);
    $('.scrollLeftBox>li h4+ul').hide();
    $('.scrollLeftBox>li h4').click(function() {
        $('.scrollLeftBox>li h4+ul').stop().slideUp(300);
        $(this).next('ul').stop().slideToggle(300);
    });
  }else{

  }
}

// 최초 실행
handleMediaQuery(mediaQuery);

// 변경 감지
mediaQuery.addEventListener("change", handleMediaQuery);
