$(function() {
  $('#slider').slider({
    min: 0,
    max: 1,
    step: 0.01,
    animate: 'slow',
    slide: function(event, ui) {
      $('#drawing').css('opacity', 1-ui.value);
      $('#photo').css('opacity', ui.value);
    }
  });
});
