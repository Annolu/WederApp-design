
$(document).ready(function(){

  var burger= $("#burger-container");

  //menu-layer animation on load
  animateLayers();

  $('.menu-wrapper').addClass('animate-menu');
  //burger icon animation
  burger.on('click', function(){
    burger.toggleClass("open");
  //menu-layer animation on click
  animateLayers();
  });

  function animateLayers(){
    if(burger.hasClass('open')){
      $('.menu-layer').addClass('menu-down');
      $('.menu-wrapper').addClass('animate-menu');
      $('.main-content').removeClass('fade-in');
    }else{
      $('.menu-layer').removeClass('menu-down');
      $('.main-content').addClass('fade-in');
    }
  }
  //menu-layer animation on submit

  $( ".input-group" ).submit(function(event) {
    event.preventDefault();
    if(burger.hasClass('open')){
      burger.removeClass("open");
      $('.menu-layer').removeClass('menu-down');
    }
    $('.main-content').addClass('fade-in');
  });
});
