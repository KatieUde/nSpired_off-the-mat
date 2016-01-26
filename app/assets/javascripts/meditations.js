// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function popZen() {
  $("#zen").hover(function() {
    $("#zen-deat.ui.modal").modal('show');
    console.log('stuff is happening');
  });
}

function popVip() {
  $("#vip").hover(function() {
    $("#vip-deat.ui.modal").modal('show');
    console.log('stuff is happening');
  });
}

function popMind() {
  $("#mind").hover(function() {
    $("#mind-deat.ui.modal").modal('show');
    console.log('stuff is happening');
  });
}

function popLove() {
  $("#love-kind").hover(function() {
    $("#love-kind-deat.ui.modal").modal('show');
    console.log('stuff is happening');
  });
};
