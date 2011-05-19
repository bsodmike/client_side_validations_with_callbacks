// You will need to require 'jquery-ui' for this to work
// public/javascripts/rails.validations.callbacks.js
clientSideValidations.callbacks.element.fail = function(element, message, callback) {
  callback();
  if (element.data('valid') !== false) {
    element.parent().find('.message').hide().effect('highlight', {}, 2000);
    element.animate( { backgroundColor: "#ffffcc" }, 1000);
  }
}

clientSideValidations.callbacks.element.pass = function(element, callback) {
  // Take note how we're passing the callback to the hide() 
  // method so it is run after the animation is complete.
  element.parent().find('.message').effect('fade', {}, 2000, callback);
  element.animate( { backgroundColor: "#ffffff" }, 1000, callback);
}