$(document).ready(function(){


  $('.project h3').hover(function(e){

    var dataImageUrl = $(this).data('key');

    if(  $(this).parent().is('a')){
        $(this).parent().parent().toggleClass('legible');
    }else{
        $(this).parent().toggleClass('legible');
    }

    $('.projects').eq(0).css({'background':`url(${dataImageUrl}) no-repeat center center fixed`, 'background-size': 'contain'});
    // $('.reveal').toggleClass('reveal');
    // $(this).find('img').addClass('reveal');
  });

  $('.project h3').mouseout(function(){
    $('.projects').eq(0).css({'background': ''});
  });
});
