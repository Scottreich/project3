///// Back end
var results = function(userInput2) {
var arrayAlpha = [];
for (var index= 1; index <= "userInput2"; index +=1)
  if (index % 3 === 0) {
    arrayAlpha.push("Ping")
  } else if (index % 5 === 0) {
    arrayAlpha.push("Pong")
  } else if (index % 15 === 0) {
    arrayAlpha.push("Ping-Pong")
  } else {
    arrayAlpha.push(index);
  }
    return arrayAlpha;
};
// Front end
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    console.log(typeof results);
    var userInput= parseInt($("input#number").val());
    // $("#output ul").text(results)
    results.forEach(function(result) {
      $("#output ul").append("<li>" + result + "</li>")

    })
  });
});
