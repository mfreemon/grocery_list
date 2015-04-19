
$(document).ready(function(){

var comments = '<div class = "comment-list large-12 columns"><ul><li class="comments">This is a Comment</li></ul></div>';
// var groceries = '<h3>'+'<div class="item large-10 columns">'+'<p>'+'dog'+'</p>' 
// 					+'</div>'+'</h3>'+'<div class="comments large-10 columns">'
// 					+'<p>'+'See if this works'+'</p>'+'</div>';


	$('button').on('click', append); 	
	$(".shopping-list").on('click','#comments-tab', accordion); 	
	$('.shopping-list').on('change', '.grocery-item #checkbox1', checkoff);
	$('.shopping-list').on('click','.grocery-item #delete', remove);

		




	function accordion(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').children('.comment-list').slideToggle();
	}

	function remove(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').remove();
	}

	function checkoff(){ 
			if ($(this).is(':checked')) {
    			 $(this).next('#food').css('text-decoration', 'line-through');
 			 } else {
     		$(this).next('#food').css('text-decoration', 'none');
  			}	
	}
 
 	function append (event){
		event.preventDefault();
		x = $('input').val();
		//console.log(x);	
		$('.shopping-list').append('<div class="grocery-cell large-12 columns"><div class ="grocery-item large-12 columns"><input type ="checkbox" id ="checkbox1"><p id ="food">' + x + '</p><p id = "delete"><a href="#"><img src="img/delete.png"></a></p><p id="comments-tab"><a href="#" alt ="View Comments">Comments</a></p></div>' + comments + '</div>');		
		console.log('we made it');
		$('input').val('');					
	}

});	

// $(document).ready(function(){
// 	accordion();
// 	append();
// 	checkoff();
// 	delete();
// });
