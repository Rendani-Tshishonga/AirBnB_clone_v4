
window.addEventListner("DOMContentLoaded", function () {
	const amenity_id = {};
	if ($(this).is(':checked')) {
		amenity_id[$(this).attr('data-id') = $(this).attr('data-name');
	}
	else if (!$(this).is(':checked')) {
		delete amenity_id[$(this).attr('data-id')];
	}
});
