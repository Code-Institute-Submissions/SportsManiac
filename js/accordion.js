$(document).ready(() => {
  $('#accordion1').click(() => {
    var element = '#accordion1-rollout';
    if (!$(element).is(':visible')) {
      $(element).slideDown();
    } else {
      $(element).slideUp();
    }
  });

  $('#accordion2').click(() => {
    var element = '#accordion2-rollout';
    if (!$(element).is(':visible')) {
      $(element).slideDown();
    } else {
      $(element).slideUp();
    }
  });
  $('#accordion3').click(() => {
    var element = '#accordion3-rollout';
    if (!$(element).is(':visible')) {
      $(element).slideDown();
    } else {
      $(element).slideUp();
    }
  });
});
