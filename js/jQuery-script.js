'use strict';

$(document).ready(function(){
//   $('#first').css('background-color','blue').hide('slow'); 
    
/*    Manipulowanie obiektami   */
//    $('#first p').css('font-size','16px');
//    console.log($('p').text());
//    $('p').text("Hello world!");
    
    console.log($('p').html());
    $('p').html("Hello <b>World</b>");
    $('.pierwszy').append('<span style="color:red; font-size:20px;"> 123</span>');
    $('.pierwszy').prepend('<span style="color:blue; font-size:20px;">123 </span>');
    $('.pierwszy').before('<h1>Nagłówek</h1>');
    $('.ostatni').after('<footer>Stopka</footer>');
});