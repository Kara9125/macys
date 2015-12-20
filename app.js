$( document ).ready(function() {
    console.log( "ready!" );

function returnAjax(){

	return $.ajax({
			url: "http://d345h07ts0fu2m.cloudfront.net/379/data48.json",
			type: 'get',
			dataType: 'jsonp',
			jsonpCallback: "cmsCallback",
			success: function ( data ) {
			// console.log(data.categories);

			console.log(data.categories.EnglishEvents2015.entries);

			var englishEntries = data.categories.EnglishEvents2015.entries
			$.each (englishEntries, function(index, value){

				$("#main-content").append(
					"<div class='block col-xs-12 col-sm-6 col-sm-offset-3'><p>"+ value.month +" "+ value.day+", "+ value.time+"</p><p>"+ value.storename +"</p><button id="+index+" class='more-btn btn'>See More</button></div>"
					);

			});

			$(document).ready(function(){
			  $(".more-btn").click(function(event){
			  	var index = event.target.id;
			    $("body").addClass("lightbox-open");
			    $("#lightbox, #lightbox-panel").fadeIn(300);
			    $("#lightbox-panel").append("<h1>Full Event Info</h1>");
			    $("#lightbox-panel").append("<h3>"+ englishEntries[index].month+" "+ englishEntries[index].day+"</h3>");
			    $("#lightbox-panel").append("<h3>"+ englishEntries[index].time +"</h3>");
			    $("#lightbox-panel").append("<h3>"+ englishEntries[index].storename +", "+ englishEntries[index].city+"</h3>");
			    $("#lightbox-panel").append("<h3>"+ englishEntries[index].floor +"</h3>");
			    $("#lightbox-panel").append("<p>"+ englishEntries[index].desc +"</p>");

			    if (englishEntries[index].rsvp === "N/A")
			    	$("#lightbox-panel").append("<p>RSVP: Not Necessary</p>");
			    else {
			    	$("#lightbox-panel").append("<p><a href= "+ englishEntries[index].rsvp +">Click Here to RSVP</a></p>");
			    }

			    
			    $("#lightbox-panel").append("<a id='close-panel' class='btn' href='#'>Close</a>");

			    
			    $("a#close-panel").click(function(event){
			    	event.preventDefault();
			    	console.log(event);
			    	$("body").removeClass("lightbox-open");
			    $("#lightbox, #lightbox-panel").fadeOut(300);
			    $("#lightbox-panel").empty();

			  });
			    

			  })
			});

			}

	});


};	

var ajax = returnAjax();
console.log("HELLO", ajax)



 });
