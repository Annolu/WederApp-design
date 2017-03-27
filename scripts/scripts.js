
$(document).ready(function(){
  //burger icon animation
  $("#burger-container").on('click', function(){
    $(this).toggleClass("open");
  //menu-layer animation
    animateStuff($(this));
  });

  function animateStuff(burger){
    if(burger.hasClass('open')){
      $('.menu-layer').addClass('menu-down');
      $('.main-content').removeClass('fade-in');
    }else{
      $('.menu-layer').removeClass('menu-down');
      $('.main-content').addClass('fade-in');
    }
  }

  $( ".input-group" ).submit(function(event) {
    event.preventDefault();
    if($("#burger-container").hasClass('open')){
      $("#burger-container").removeClass("open");
      $('.menu-layer').removeClass('menu-down');
    }

    $('.main-content').addClass('fade-in');
  });
});
