$(".oceanClickMe").click(function (){
  $(".oceanHide").fadeToggle();
});

$(".lakeClickMe").click(function (){
  $(".lakeHide").fadeToggle();
});

$("#green").click(function() {
  $("body").removeClass();
  $("body").addClass("green");
});

$("#yellow").click(function() {
  $("body").removeClass();
  $("body").addClass("yellow");
});

$("#red").click(function() {
  $("body").removeClass();
  $("body").addClass("red");
});
