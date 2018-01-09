$(document).ready(function(){
  $('h3.mode-title').click(function(e){

    $(this).parent().siblings().find('.circle-container').toggle();
  });
});
