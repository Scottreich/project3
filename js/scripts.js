///// Back end
var calculator = function(userInput2) {
var arrayAlpha = [];
for (var index= 1; index <= userInput2; index +=1) {
  if (index % 15 === 0) {
    arrayAlpha.push("Ping-pong")
  } else if (index % 5 === 0) {
    arrayAlpha.push("Pong")
  } else if (index % 3 === 0) {
    arrayAlpha.push("Ping")
  } else {
    arrayAlpha.push(index);
  }
  }   return arrayAlpha;
};
// Front end
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput= parseInt($("input#number").val());
    var arrayBeta = calculator(userInput);
      $("#output ul").empty();
    arrayBeta.forEach(function(beta) {
      $("#output ul").append("<li>" + beta + "</li>");
    });
  });
});
