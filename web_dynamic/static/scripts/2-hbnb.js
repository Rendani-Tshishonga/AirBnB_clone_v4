
window.addEventListner("DOMContentLoaded", function () {
	const url = "http://0.0.0.0:5001/api/v1/status/";
	$.get(url, function (response) {
		if (response.status === "ok") {
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
});
