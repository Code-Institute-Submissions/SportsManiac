$(document).ready(() => {
  $('#accordion1').click(() => {
    var element = '#accordion1-rollout';
    if (!$(element).is(':visible')) {
      $(element).slideDown();
    } else {
      $(element).slideUp();
    }
  });
});
