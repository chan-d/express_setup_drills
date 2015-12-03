console.log('sanity check: js is working');

$(document).ready(function() {


var title; 




	// $.ajax({
	// 	method: 'GET',
	// 	url: 'http://localhost:3000/',
	// 	success: function(data) {
	// 		console.log(data);
	// 	},
	// 	error: function(){
	// 		console.log('you missed something.......');
	// 	}

	// });

	$('#inputForm').on('submit', function (event) {
		event.preventDefault();
		var artist = $('#artist').val();
		$.ajax({
			method: "GET",
			url: "https://api.spotify.com/v1/search?q=" + artist +"&type=artist",
			success: function(data) {
				data.artists.items.forEach(function(element){
					
					$('.stuffGoesHere').append("<p>" + element.name + "</p>");
				});
			}
		});
	});


});
