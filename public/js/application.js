$(document).ready(function() {
  $("#js-vote").on("submit", function() {
    event.preventDefault();
    $form = $(this);
    var method = $form.attr("method");
    var url = $form.attr("action");

    $.ajax({
      method: method,
      url: url
    }).done(function(response) {
      $("#js-post-details").children(".points").replaceWith(response);
      $form.children("#js-upvote-button").css("color", "red")
    })
  })
  // $(".upvote-button").on("click", function() {
  //   event.preventDefault();
  //   var $button = $(this);

  //   $button.css("color", "red");
  // })
});
