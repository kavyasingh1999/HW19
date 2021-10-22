// Iteration 2
console.log("Your index.js file is loaded correctly!");

$("#myWork").on("click", function(){
	console.log("You clicked on #myID");
});

$("#skillClose").on("click", function(){
	$(this).hide();
});

$("#skills").on("click", function(){
	$("#skillClose").show();
});

$("#workClose").on("click", function(){
	$(this).hide();
});

$("#work").on("click", function(){
	$("#workClose").show();
});
$(function(){
    $("#tabs").tabs();
});
/* Iteration 1
console.log("Your index.js file is loaded correctly!");

$("#myWork").on("click", function(){
	console.log("You clicked on #myID");
});

$("#skillClose").on("click", function(){
	$(this).hide();
});

$("#skills").on("click", function(){
	$("#skillClose").show();
});

$("#workClose").on("click", function(){
	$(this).hide();
});

$("#work").on("click", function(){
	$("#workClose").show();
});
$(function(){
    $("#tabs").tabs();
});
*/
