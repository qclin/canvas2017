$(document).ready(function(){

  $('.tablink').eq(0).click();
  $('h3.mode-title').click(function(e){
    console.log('clicked ')
    $(this).parent().siblings().find('.circle-container').toggle();
  });

  $("#defaultOpen").click();
});



function openExcerpt(evt, indexNum) {
  var i, tabcontent, tablinks;
  tabcontent = $(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = $(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(indexNum).style.display = "block";
  $('.active').toggleClass('active');
  $(this).addClass('active');

}
