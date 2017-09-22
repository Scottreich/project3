// Front end

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput= pareseInt($("input#number").val());

    $("#output ul").text(results)
    results.forEach(function(result) {

    })
  });
});

    ///// Back end
  var results = function(userInput2){
    var arrayAlpha = [];
    for (var index= 1; index <= "userInput2"; index +=1)
      if (index % 3 === 0) {
        arrayAlpha.push("Ping-Pong")
      } else if (index % 5 === 0)
        return arrayAlpha
});
