$(document).ready(function(){
  $('.carousel').carousel();
  function hideAll (){
 $("#fact1").hide();
 $("#fact2").hide();
 $("#fact3").hide();
 $("#fact4").hide();
 $("#fact5").hide();
 $("#fact6").hide();
 $("#fact7").hide();
  };

hideAll();


$("#panda1").click(function(){
  $("#fact1").slideToggle();
  $("#panda1").hide();
  $("#intro").hide();
});

$("#firstpanda").click(function(){
  $("#fact1").hide();
  $("#fact2").show();
});

$("#secondpanda").click(function(){
  $("#fact2").hide();
  $("#fact3").show();
});

$("#thirdpanda").click(function(){
  $("#fact3").hide();
  $("#fact4").show();
});

$("#fourthpanda").click(function(){
  $("#fact4").hide();
  $("#fact5").show();
});

$("#fifthpanda").click(function(){
  $("#fact5").hide();
  $("#fact6").show();
});

$("#sixthpanda").click(function(){
  $("#fact6").hide();
  $("#fact7").show();
});

$("#seventhpanda").click(function(){
  $("#fact7").hide();
  $("#intro").show();
  $("#panda1").show();
});





})
