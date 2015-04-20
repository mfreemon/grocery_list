
$(document).ready(function(){

var comments = '<div class = "comment-list large-12 columns"><ul></ul></div>';
var comment_text ='<div class = "new-comment" ><textarea type ="text" id="textbox"  placeholder="Add a Comment"></textarea></div>'; 
//var grocery_cell =' <div class="grocery-cell large-12 columns"><div class ="grocery-item large-12 columns"><input type ="checkbox" id ="checkbox1"><p id ="food"></p><p id = "delete"><a href="#"><img src="img/delete.png"></a></p><p id="comments-tab"><a href="#" alt ="View Comments">Comments</a></p></div> + comments +' '</div>';

// var comments = function(comment){
// 		'<div class = "comment-list large-12 columns"><ul><li class="comments">' + comment +'</li></ul></div>';
// };	


	//$('body').css('background-image','url(./img/wood.jpg)');
	$('button').on('click', append); 	
	$(".shopping-list").on('click','#comments-tab', accordion); 	
	$('.shopping-list').on('change', '.grocery-item #checkbox1', checkoff);
	$('.shopping-list').on('click','.grocery-item #delete', remove);
	$('.shopping-list').on('click', '.grocery-item #addtab', new_comment);	
	$('.shopping-list').keypress('#textbox', add_comment);
 	
		

	function new_comment(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').children('.new-comment').slideToggle("slow", "swing");
		//$(this).closest('.grocery-cell').children('.comment-list').slideToggle();
	}

	function accordion(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').children('.comment-list').slideToggle("slow", "swing");
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
	
	function add_comment(){
		var text_comm = $('#textbox').val();
		console.log(text_comm);
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			$('.comment-list ul').append('<li class="comments">This is a Comment</li>');
			alert('You pressed a "enter" key in textbox');	
			$('#textbox').val('');
		}		
	}
	
	function append (event){
		event.preventDefault();
		var x = $('input').val();
		var groceries=[
			'<div class="grocery-cell large-12 columns">',
			'<div class ="grocery-item large-12 columns">',
			'<input type ="checkbox" id ="checkbox1">',
			'<p id="food">'+ x + '</p><p id = "delete"><a href="#"><img src="img/delete.png"></a></p>',
			'<p id="comments-tab"><a href="#" alt ="View Comments">Comments</a></p>',
			'<p id="addtab"><a href="#">Add a Comment</a></p></div>'
		];
		$('.shopping-list').append(groceries.join('') + comment_text + comments+'</div>');	
		$('input').val('');					
	}
});	

