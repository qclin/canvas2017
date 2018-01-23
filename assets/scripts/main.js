$(document).ready(function(){


  $('.project h3').hover(function(e){

    var dataImageUrl = $(this).data('key');

    if($(this).parent().is('a')){
        $(this).parent().parent().addClass('legible');
    }else{
        $(this).parent().addClass('legible');
    }

    $('.projects').eq(0).css({'background':`url(${dataImageUrl}) no-repeat center center fixed`, 'background-size': 'contain'});
  });

  $('.project').mouseleave(function(){
    $('.projects').eq(0).css({'background': ''});
    $(this).removeClass('legible');
  });
});
