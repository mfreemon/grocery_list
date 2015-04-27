$(document).ready(function(){
var comment_text =['<div id="new-comment" class="reveal-modal medium" data-reveal aria-hidden="true" role="dialog">',
				'<form><div class = "large-6 columns"><textarea type ="text" id="textbox" placeholder="Add a Comment"></textarea></div>',
				'<div class = "person large-3 medium-3 small-3 columns">',
                '<select id = "family-member">',
                '<option value ="Mom">Mom</option>',
                '<option value ="Dad">Dad</option>',
                '<option value ="Sister">Sister</option>',
                '<option value ="Brother">Brother</option></select></div>',
                '<div class = "large-3 columns">',
                '<button class="button radius add-comment">Post Comment</button></div>',  
               	'</div></form></div>']; 	


	//$('body').css('background-image','url(./img/wood.jpg)');
	$('#entry').on('click', append);
	$('.new-list').on('click', new_list);
	$(".shopping-list").on('click','.grocery-cell #comments-tab', view_comment); 	
	$('.shopping-list').on('change','.grocery-item #checkbox1', checkoff);
	$('.shopping-list').on('click','.grocery-item #delete', remove);
	$('.shopping-list').on('click','.grocery-cell #post', add_comment);	
	// $('.shopping-list').on('click', '#post', function(){
	// 	var text_comm = $(this).closest('#new-comment').find('#textbox').val();
	// 	console.log(text_comm);
	// 	var person = $(this).closest('#new-comment').find('option:selected').val();
	// 	$(this).closest('.grocery-cell').find('.comment-list ul').append('<li class="comments"><p>'+ person+'</p>'+'<p>'+text_comm+ '</p></li>');	
	// 	$(this).closest('#textbox').val('');
	// 	alert(person+ text_comm);

	// });
	$('.shopping-list #new-comment').leanModal();

 	
	
	function view_comment(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').find('.comment-list').slideToggle();
	}
	
	function remove(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').fadeOut('slow');
	}

	function new_list(event){
		event.preventDefault();
		$('.shopping-list').children('.grocery-cell').fadeOut();
	}

	function checkoff(){ 
		if ($(this).is(':checked')) {
    		$(this).next('#food').css('text-decoration', 'line-through');
 			} else {
     		$(this).next('#food').css('text-decoration', 'none');
  		}	
	}
	
	function add_comment(event){
		event.preventDefault();
		var text_comm = $(this).closest('.grocery-cell').find('#new-comment #textbox').val();
		var person = $(this).closest('#new-comment').find('option:selected').val();
		alert(person);
		$(this).closest('.grocery-cell').find('.comment-list ul').append('<li class="comments"><p>'+ person+'</p>'+'<p>'+text_comm+ '</p></li>');	
		$(this).closest('#textbox').val('');	
	}			
	
	function append (event){
		event.preventDefault
		var x = $('input').val();
		var groceries=[
			'<div class="grocery-cell large-12 columns">',
			'<div class ="grocery-item large-12 columns">',
			'<input type ="checkbox" id ="checkbox1">',
			'<p id ="food" class="large-3 medium-3 small-4 columns">'+ x + '</p>',
			'<div class="medium-1 small-1 columns" id ="delete"><a href="#"><img src="img/delete.png"></a></div>',
			'<p class =" large-4 medium-3 small-3 columns"><a href="#" class="add-tab" data-reveal-id="new-comment">Add Comment</a></p>', 
			'<p class ="medium-2 small-2 columns" id="comments-tab"><a href="#" alt ="View Comments">View Comments</a></p></div>',
			'<div class = "comment-list large-12 columns"><ul></ul></div>'
		];
		$('.shopping-list').append(groceries.join('') + comment_text.join(''));	
		$('input').val('');					
	}
});