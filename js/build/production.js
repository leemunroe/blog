// Show/hide responsive nav
function showNav(){
  // $('#trigger-nav').click(function(){
  //   $('.main-sidebar').addClass('transition');
  //   $('.main-article').addClass('transition');
  //   $('.container').addClass('transition');
  //   $('.main-sidebar').toggleClass('show-main-nav');
  //   $('.container').toggleClass('show-main-nav');
  // });

  document.getElementById("trigger-nav").onclick = function(){

    document.getElementById('main-sidebar').classList.add('transition');
    document.getElementById('main-article').classList.add('transition');
    document.getElementById('container').classList.add('transition');

    document.getElementById('main-sidebar').classList.toggle('show-main-nav');
    document.getElementById('container').classList.toggle('show-main-nav');
  };

}
showNav();