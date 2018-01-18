$('.page-link').click(function(e){
  var dataKey = $(this).data('key')
  $('.reveal-page').toggleClass('reveal-page');
  $(`.sub-page#${dataKey}-page`).addClass('reveal-page');
  $('body').toggleClass('modal-active');
  $(`#${dataKey}-page .tablink`).eq(0).click();

});


function closePage(){
  $('.reveal-page').toggleClass('reveal-page');
  $('body').toggleClass('modal-active');
}

function openTab(evt, section, indexNum) {

  $(window).scrollTop(0);

  var i, tabcontent, tablinks;
  tabcontent = $(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = $(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  $('#'+section+indexNum).css('display', 'block');
  $('.active').toggleClass('active');
  evt.currentTarget.className += " active";

}
