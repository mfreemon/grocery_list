
$(document).ready(function(){

var comments = '<div class = "comment-list large-12 columns"><ul><li class="comments">This is a Comment</li></ul></div>';
//var grocery_cell =' <div class="grocery-cell large-12 columns"><div class ="grocery-item large-12 columns"><input type ="checkbox" id ="checkbox1"><p id ="food"></p><p id = "delete"><a href="#"><img src="img/delete.png"></a></p><p id="comments-tab"><a href="#" alt ="View Comments">Comments</a></p></div> + comments +' '</div>';


	$('body').css('background-image','url(./img/wood.jpg)');
	$('button').on('click', append); 	
	$(".shopping-list").on('click','#comments-tab', accordion); 	
	$('.shopping-list').on('change', '.grocery-item #checkbox1', checkoff);
	$('.shopping-list').on('click','.grocery-item #delete', remove);
	$('.shopping-list').on('click', '.grocery-item #add-tab',new_comment);
	
	$('#textbox').keypress(function(event){
 		text_comm =$('#textbox').val();
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			$('.comment-list ul').append('<li class ="comments">'+ text_comm+'</li>');
			alert('You pressed a "enter" key in textbox');
			$('#textbox').val('');	
	}
	event.stopPropagation();
});
 	
		

	function new_comment(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').children('.new-comment','.comment-list').slideToggle();
		//$(this).closest('.grocery-cell').children('.comment-list').slideToggle();
	}

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

	// function add_comment(){
	// 	if (event.keyCode == 13){
	// 		event.preventDefault();
	// 		alert('slowly');
	// 		var text_comm  = $(this).val();
	// 		$('.comment-list ul').append('<li class ="comments">'+ text_comm+'</li>');
	// 		$('textarea').val('');				
	// 	}	
	// }


	function append (event){
		event.preventDefault();
		var x = $('input').val();
		//console.log(x);	
		$('.shopping-list').append('<div class="grocery-cell large-12 columns"><div class ="grocery-item large-12 columns"><input type ="checkbox" id ="checkbox1"><p id ="food">' + x + '</p><p id = "delete"><a href="#"><img src="img/delete.png"></a></p><p id="comments-tab"><a href="#" alt ="View Comments">Comments</a></p></div>' + comments + '</div>');		
		console.log('we made it');
		$('input').val('');					
	}
});	

