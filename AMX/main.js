$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

function scrollToAbout() {
   var topOfDiv = $('.aboutpic').offset().top;
   $('html, body').animate({scrollTop: topOfDiv}, 1000);
   return false;
}

function scrollToExp() {
   var topOfDiv = $('.experience').offset().top;
   $('html, body').animate({scrollTop: topOfDiv}, 1000);
   return false;
}

function scrollToPort() {
   var topOfDiv = $('.skpic').offset().top;
   $('html, body').animate({scrollTop: topOfDiv}, 1000);
   return false;
}