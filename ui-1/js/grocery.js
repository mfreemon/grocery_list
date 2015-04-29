
var comment_text =['<div class = "new-comment"><form>',
            '<div class ="large-6 columns">',
            '<textarea type ="text" id="textbox" placeholder="Add a Comment"></textarea></div>',
            '<div class = "person large-3 columns">',
            '<select id = "family-member">',
            '<option value ="Mom">Mom</option>',
            '<option value ="Dad">Dad</option>',
            '<option value ="Sister">Sister</option>',
            '<option value ="Brother">Brother</option></select>',
            '</div>',
            '<div class = "large-3 columns">',
            '<button class="button radius add-comment" id ="post" >Post Comment</button>',
            '</div></form>',
            '<div class = "comment-list hidden large-12 columns"><ul></ul></div></div>']; 
           			
	//expands the accordion to reveal input area of commentary
	function new_comment(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').find('.new-comment').slideToggle("slow",function(){});
	}
	
	//green delete button the removes the food item
	function remove(event){
		event.preventDefault();
		$(this).closest('.grocery-cell').fadeOut(function(){
			$(this).remove();
		});
	}

	//removes all currently listed food items in order to start new list
	function new_list(event){
		event.preventDefault();
		$('.shopping-list').children('.grocery-cell').fadeOut(function(){
			$(this).remove();
		});
	}

	//mark-off items as desired
	function checkoff(){ 
		if ($(this).is(':checked')) {
    		$(this).next('#food').css('text-decoration', 'line-through');
 			} else {
     		$(this).next('#food').css('text-decoration', 'none');
  		}	
	}
	
	//appends comments to the commment list which exist below input are for comments
	function add_comment(event){
		event.preventDefault();
		var comm = $(this).closest('.grocery-cell').find('#textbox').val();
		var person = $(this).closest('.new-comment').find('option:selected').val();
		if(comm ==0 ){
			alert(person +"," + " " + "Please enter you comment");
			}else{
				$(this).closest('.grocery-cell').find('.comment-list').addClass("visible").removeClass("hidden");
				$(this).closest('.grocery-cell').find('.comment-list ul').append('<li class="comments"><div><p class="comm">'+ person +':' + '</p>'+'<p>'+comm+'</p></div></li>');	
			}
		$(this).closest('.grocery-cell').find('#textbox').val('');			
		}				
	
	// adding an new item to the list
	function append (event){
		event.preventDefault();
		if(!$('input').val()){
			alert('Please add an item');
		}else{
		var x = $('input').val();
		var groceries=[
			'<div class="grocery-cell large-12 columns">',
			'<div class ="grocery-item large-12 columns">',
			'<input type ="checkbox" id ="checkbox1">',
			'<p id ="food" class="large-7 medium-7 small-6 columns">'+ x + '</p>',
			'<div class="medium-1 small-1 columns" id ="delete"><a href="#"><img src="img/delete.png"></a></div>',
			'<p class ="medium-2 small-3 columns" id="comments-tab"><a href="#" alt ="View Comments">Comments</a></p></div>'
		];
		$('.shopping-list').append(groceries.join('') + comment_text.join(''));	
		$('input').val('');					
	}
}

$(document).ready(function(){
// event handlers for the app 
	$('#entry').on('click', append);
	$('.new-list').on('click', new_list);
	$(".shopping-list").on('click','.grocery-cell #comments-tab', new_comment); 	
	$('.shopping-list').on('change', '.grocery-item #checkbox1', checkoff);
	$('.shopping-list').on('click','.grocery-item #delete', remove);	
	$('.shopping-list').on('click','.new-comment #post', add_comment);
});	

