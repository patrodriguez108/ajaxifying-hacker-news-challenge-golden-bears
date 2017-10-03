$(document).ready(function() {
  $("article").on("submit", "#js-vote", function() {
    event.preventDefault();
    $form = $(this);
    var method = $form.attr("method");
    var url = $form.attr("action");

    $.ajax({
      method: method,
      url: url
    }).done(function(response) {
      $form.children("button").css("color", "red");
      var post = $form.siblings("p");
      post.children(".points").replaceWith(response + " points")
    })

  // $(".upvote-button").on("click", function() {
  //   event.preventDefault();
  //   var $button = $(this);

  //   $button.css("color", "red");
  })
});
