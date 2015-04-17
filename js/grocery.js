// var comments = '<ul id ="comment-list"><li><div class="comments large-10 columns"><p>See if this works</p></div><li></ul>';
// var groceries = '<h3>'+'<div class="item large-10 columns">'+'<p>'+'dog'+'</p>' 
// 					+'</div>'+'</h3>'+'<div class="comments large-10 columns">'
// 					+'<p>'+'See if this works'+'</p>'+'</div>';






	function Accordion(){	
		$(".grocery-cell").on('click','#comments-tab', function(event){
			event.preventDefault();
			$('.comment-list').slideToggle();
	})
};


	function Checkoff(){
		$('#checkbox1').on('change', function(){ 
			if ($(this).is(':checked')) {
    			 $('#grocery-item').css('text-decoration', 'line-through');
 			 } else {
     		$('#grocery-item').css('text-decoration', 'none');
  			}	
		})
	};
 //  			
	// 	})
	// };

	// function Append (){
	// $('button').on('click', function(event, x){
	// 	event.preventDefault();
	// 	x = $('input').val();
	// 	console.log(x);	
	// 	$('.shopping-list').append('<div class="grocery-cell large-10 columns"><input type ="checkbox" id ="checkbox1"><p id="grocery-item">'+x+'</p><p id="comments-tab"><a href="#" alt ="View Comments">Comments</a></p></div>' + comments);		
	// 	console.log('we made it');
	// 	$('input').val('');				
	// 	})	
	// };

	
$(document).ready(function(){
	Accordion();
	// Append();
	Checkoff();

});