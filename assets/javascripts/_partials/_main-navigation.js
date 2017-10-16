'use strict';

(function($) {

  $('.main-navigation .menu-link').click(function(event) {
      event.preventDefault();
      $('.main-navigation').toggleClass('menu-open');


  })
})(jQuery)