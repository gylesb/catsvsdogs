$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul.dot1").prepend("<li>WOOF!</li>");
    $("ul.dot2").prepend("<li>MEOW!</li>")
    $("li").click(function() {
      $(this).remove();
  });
  });


  $("button#meow").click(function() {
    $("ul.dot2").prepend("<li>MEOW!</li>");
    $("ul.dot1").prepend("<li>WOOF!</li>")
    $("li").click(function() {
      $(this).remove();
  });
  });
});
