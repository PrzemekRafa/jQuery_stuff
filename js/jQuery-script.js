'use strict';

$(document).ready(function(){
//   $('#first').css('background-color','blue').hide('slow'); 
    
/*    Manipulowanie obiektami   */
//    $('#first p').css('font-size','16px');
//    console.log($('p').text());
//    $('p').text("Hello world!");
    
//    console.log($('p').html());
//    $('p').html("Hello <b>World</b>");
    
/*  Dodawanie treści    */
    $('.pierwszy').append('<span style="color:red; font-size:20px;"> 123</span>');
    $('.pierwszy').prepend('<span style="color:blue; font-size:20px;">123 </span>');
    $('.pierwszy').before('<h1>Nagłówek</h1>');
    $('.ostatni').after('<footer>Stopka</footer>');
    
/*    Usuwanie treści   */
/*  REMOVE usuwa cały element i elementy wewnątrz niego */
//    $('.drugi').remove();
    $('.drugi span').remove();
    
/*    EMPTY usuwa treść ale zostawia element    */
//    $('#first p').empty();
    
/*    Metoda CSS    */
    $('#first p').css({
//        'font-size':'16px',
        'background-color':'yellow',
        'margin':'5px'
    })
    
/*    Metoda VAL    */
    var zmiennaVal = $('#formularz input').val();
    console.log(zmiennaVal);
    $('#formularz input').val('To jest test metody VAL');
    
/*    Metody dodające i usuwające klasy     */
    $('.trzeci').addClass('czwarty piaty').removeClass('trzeci');
    
/*    Metody FIND i EACH    */
    $('#znajdz').find('.find').css({
        'background-color':'blue',
        'color':'white',
        'font-size':'30px'
    })
    
    $('#kazdy ul li').each(function(index){
        console.log($(this).text());
        $(this).addClass('pozycja_listy-' + index);
    })
    
/*    Eventy    */
//    $('#eventy button').each(function(){
//        $(this).click(function(){
//        console.log('Przycisk został wciśnięty!');
//        })
//    })
    
//    $('#eventy button').each(function(){
//        $(this).on({
//            'click': function() {
//                console.log('Przycisk został wcisnięty!')
//            },
//            'mouseover': function () {
//                console.log('Jestem nad przyciskiem!')
//            },
//        })
//    })
    
    clickMouseover();
    
//    showHide();
    
//    fadeInOut();
    
//    slides();
    
    toggleDiv();
    
});

function clickMouseover () {
        $('#eventy button').each(function(){
        $(this).on({
            'click': function() {
                console.log('Przycisk został wcisnięty!')
            },
            'mouseover': function () {
                console.log('Jestem nad przyciskiem!')
            },
        })
    })
};

$(window).resize(function(){
    changeColor();
});

function changeColor () {
    $('#first').css('background-color','crimson');
};

$(window).scroll(function(){
    fixedMenuAfterScroll();
});

function fixedMenuAfterScroll () {
    
    var parent = $('#main-nav');
    var wysokosc = $(parent).height();
    var offset = $(window).scrollTop();
    
//    console.log(wysokosc);
//    console.log($(window).scrollTop());
    
    if (offset >= 100) {
        $(parent).css({
            'position':'fixed',
            'top':'0',
            'width':'100vw',
        })
    } else {
        $(parent).css({
            'position': '',
        })
    }
};

/*  SHOW i HIDE steruje opacity, heigh, width, margin i padding i na końcu daje display:none    */
function showHide () {
    var parent = $('#show_hide');
    $(parent).hide(5000).show(5000);
};

/*  FADE IN i FADE OUT steruje tylko opacity i na końcu daje display:none    */
function fadeInOut () {
    var parent = $('#show_hide');
    $(parent).fadeOut(2000).fadeIn(2000);
}

/*  SLIDE IN i SLIDE OUT steruje opacity, heigh, width, margin i padding i na końcu daje display:none ale tylko w pionie    */
function slides () {
    var parent = $('#show_hide');
    $(parent).slideUp(3000).slideDown(3000);
}

function toggleDiv () {
    var parent = $('#show_hide');
    $(parent).click(function(){
        $(this).find('h1').toggle(2000);
    })
}