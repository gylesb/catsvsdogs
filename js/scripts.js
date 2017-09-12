$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul.dot1").prepend("<li>WOOF!</li>");
    $("ul.dot2").prepend("<li>MEOW!</li>")
  });

  $("button#meow").click(function() {
    $("ul.dot2").prepend("<li>MEOW!</li>");
    $("ul.dot1").prepend("<li>WOOF!</li>")
  });
});
