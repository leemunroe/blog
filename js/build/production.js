// Show/hide responsive nav
function showNav(){
  $('#trigger-nav').click(function(){
    $('.main-sidebar').addClass('transition');
    $('.main-article').addClass('transition');
    $('.container').addClass('transition');
    $('.main-sidebar').toggleClass('show-main-nav');
    $('.container').toggleClass('show-main-nav');
  });
}
showNav();