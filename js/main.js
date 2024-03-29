$(function() {

  // Initialize the slider plugin
  $('#slider').slider({
    min: 0,
    max: 1,
    step: 0.01,
    animate: 'slow',
    slide: function(event, ui) {
      $('#images img').eq(0).css('opacity', 1-ui.value);
      $('#images img').eq(1).css('opacity', ui.value);
    }
  });

  // Focus on the slider so keyboard controls work without clicking
  $('#slider a').focus();

});
