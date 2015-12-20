$( document ).ready(function() {
    console.log( "ready!" );

function returnAjax(){
	// function checkRSVP(value){
	// 	if (value === "N/A")
	// 		return "Not necessary"
	// 	else {
	// 		return "Click Here to RSVP"
	// 	}
	// }

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
				// value.
				$("#main-content").append("<p>"+ value.month +" "+ value.day+", "+ value.time+"</p>");
				$("#main-content").append("<p>"+ value.storename +"</p>");
				$("#main-content").append("<input type='button' id="+index+" class='more-btn' value='See More'>");
				

			});

			$(document).ready(function(){
			  $(".more-btn").click(function(event){
			  	var index = event.target.id;
			    $("#lightbox, #lightbox-panel").fadeIn(300);
			    $("#lightbox-panel").append("<p>Full Event Info</p>");
			    $("#lightbox-panel").append("<p>"+ englishEntries[index].month+", "+ englishEntries[index].day+"</p>");
			    $("#lightbox-panel").append("<p>"+ englishEntries[index].time +"</p>");
			    $("#lightbox-panel").append("<p>"+ englishEntries[index].storename +", "+ englishEntries[index].city+"</p>");
			    $("#lightbox-panel").append("<p>"+ englishEntries[index].floor +"</p>");
			    $("#lightbox-panel").append("<p>"+ englishEntries[index].desc +"</p>");

			    if (englishEntries[index].rsvp === "N/A")
			    	$("#lightbox-panel").append("<p>RSVP: Not Necessary</p>");
			    else {
			    	$("#lightbox-panel").append("<p><a href= "+ englishEntries[index].rsvp +">Click Here to RSVP</a></p>");
			    }

			    
			    $("#lightbox-panel").append("<a id='close-panel' href='#'>Close</a>");

			    
			    $("a#close-panel").click(function(event){
			    	event.preventDefault();
			    	console.log(event);
			    	console.log("hi doggie")
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
