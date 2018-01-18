$(document).ready(function(){

  var x = $(window).width();
  var y = $(window).height();
  console.log('hereee', x, y )
  window.scroll(x,y);
});


function move(evt, position){
  var x = $(window).width();
  var y = $(window).height();
  var offset = $('body').offset();

  console.log('move called ---- ', offset.left, offset.top, x, y );
  if (position == 0){ // top
    $(window).scrollTop(-y);
  }else if (position == 1){ // left
    $(window).scrollLeft(-x);
  }else if (position == 2){ // right
    $(window).scrollLeft(x);
  }else{ // bottom
    $(window).scrollTop(y);
  }
}
