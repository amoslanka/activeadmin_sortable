/* Active Admin Sortable plugin */
$(document).ready(function() {
	
	var sortable_options = {
		// placeholder: "ui-state-highlight",
		update: function(event, ui) {
			// console.log("update.", $(this).sortable('serialize'), ui);
			// console.log($(this).parent('.sortable').attr('data-on-update'))
			
			var data = $(this).sortable('serialize');
			var post_path = $(this).parent('.sortable').attr('data-on-update');
			
			
			$.ajax({
				type: 'post', 
				data: data,
				dataType: 'script', 
				complete: function(request){
					console.log("COMPLETE!")
				},
				url: post_path
			});
			
		}
	};
	
	$('.sortable .index_as_block').sortable(sortable_options);
	$('.sortable .index_as_table table > tbody').sortable(sortable_options);

	var ids = $('.ui-sortable').sortable('toArray').join(', #');
	$("#"+ids).addClass("ui-sortable-item");
	
	
});
