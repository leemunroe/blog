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





// Show email subscribe box when scrolling
if($('#email-subscribe-floater').length > 0) {
  var $floater = $('#email-subscribe-floater'),
      postHeight = $('.post').height(),
      postOffset = $('.post').offset().top,
      windowHeight = $(window).height(),
      displayOffset = (postHeight + postOffset) - 100

  $(window).on('scroll', function(){
    var scrollDistance = $(window).scrollTop() + windowHeight

    if(scrollDistance > displayOffset) {
      $floater.addClass('is-visible')
      $('.js-floater-input').focus();
    } else {
      $floater.removeClass('is-visible')
    }
  })
}




// Close floater
$('#js-close-subscribe-floater').click(function(event){
  $('#email-subscribe-floater').hide();
  event.preventDefault();
});



