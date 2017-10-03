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
    });
  });

  $("article").on("submit", "#js-delete", function() {
    event.preventDefault();
    $form = $(this);
    var method = $form.children('input[type="hidden"]').attr("value")
    var url = $form.attr("action")

    $.ajax({
      method: method,
      url: url
    }).done(function(response) {
      $(".post-container").replaceWith(response)
    })
  })
});
