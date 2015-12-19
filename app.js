$( document ).ready(function() {
    console.log( "ready!" );

function returnAjax(){
	function checkRSVP(value){
		if (value === "N/A")
			return "Not necessary"
		else {
			return value
		}
	}
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
				$(".container").append("<p>"+ value.month +" "+ value.day+", "+ value.time+"</p>");
				$(".container").append("<p>"+ value.storename +", "+ value.city+"</p>");
				$(".container").append("<p>"+ value.floor +"</p>");
				$(".container").append("<p>"+ value.desc +"</p>");
				$(".container").append("<p>"+ "RSVP: "+ checkRSVP(value.rsvp) +"</p>")

			});

			}
	});

};

var ajax = returnAjax();
console.log("HELLO", ajax)



 });
