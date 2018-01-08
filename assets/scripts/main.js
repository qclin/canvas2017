$(document).ready(function(){
  $('.project').hover(function(e){
    console.log('project hover hover ')
    $('.reveal').toggleClass('reveal');
    $(this).find('img').addClass('reveal');
  });
});
