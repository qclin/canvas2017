$(document).ready(function(){


  $('.project').hover(function(e){

    var dataImageUrl = $(this).data('key');
    $(this).toggleClass('legible');
    $('.projects').eq(0).css({'background':`url(${dataImageUrl}) no-repeat center center fixed`, 'background-size': 'contain'});
    // $('.reveal').toggleClass('reveal');
    // $(this).find('img').addClass('reveal');
  });
});
