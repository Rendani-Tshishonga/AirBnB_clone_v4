
window.addEventListner("DOMContentLoaded", function () {
	const url = "http://0.0.0.0:5001/api/v1/status/";
	$.get(url, function (data) {
		if (data.status === "ok") {
			$("div#api").addClass("available");
		}else {
			$("div#api").removeClass("available");
		}
	});

	const amenity_id = {};
	if ($(this).is(':checked')) {
		amenity_id[$(this).attr('data-id') = $(this).attr('data-name');
	}
	else if (!$(this).is(':checked')) {
		delete amenity_id[$(this).attr('data-id')];
	}

	$.ajax({
		type: "POST",
		url: "http://0.0.0.0:5001/api/v1/places_search/",
		contentType: "application/json",
		data: JSON.stringify({})
	}).done(function () {
		for (const place in data) {

			const template = `<article>

			<div class="title">
		  
		  	  <h2>${place.name}</h2>

		  	  <div class="price_by_night">

		  	  ${place.price_by_night}

		  	  </div>
			</div>
			<div class="information">
		  	  <div class="max_guest">
		  	  <i class=" fa fa-users fa-3x" aria_hidden="true"></i>

		  	  <br />

		  	  ${place.max_guests} Guests

		  	  </div>
		  	  <div class="number_rooms">
		  	  <i class="fa fa-bed fa-3x" aria-hidden="true"></i>

		  	  <br />

		  	  ${place.number_rooms} Bedrooms

		  	  </div>
		  	  <div class="number_bathrooms">
		  	  <i class="fa fa-bath fa-3x aria-hidden="true"></i>

		  	  <br />

		  	  ${place.number_bathrooms} Bathrooms

		  	  </div>
			</div>
			<div class="description">

			${place.description}

			</div>

			</article> <!--End 1 Place-->`;
			$("section.place").append(template);
		}
	});
});
