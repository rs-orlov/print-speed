/*
 * print-speed
 * https://github.com/rs-orlov/print-speed
 *
 * Copyright (c) 2014 Roman Orlov
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.print_speed = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.print_speed = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.print_speed.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.print_speed.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].print_speed = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
