
$(document).ready(function(){
  //burger icon animation
  $("#burger-container").on('click', function(){
    $(this).toggleClass("open");

    if($(this).hasClass('open')){
      $('.menu-layer').addClass('menu-down');
    }else{
      $('.menu-layer').removeClass('menu-down');
    }
  });
});
