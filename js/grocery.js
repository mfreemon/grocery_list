

	function Accordion(){	
		$("#comments-tab").click(function(){
		$('.comments').slideToggle();
	})
};

	function Append (){
	$('button').on('click', function(event){
		event.preventDefault();
		var grocery_item = $('input').val();
		console.log(grocery_item);	
		$('.shopping-list').append('<h3><div class="grocery-cell large-10 columns"><p>'+grocery_item+'</p></div></h3><div class="comments large-10 columns"><p>See if this works</p></div></h3>');		
		$("#accordion").accordion('refresh');
		console.log('we made it');
		$('input').val('');				
		})	
	};

	var groceries = '<h3>'+'<div class="item large-10 columns">'+'<p>'+'dog'+'</p>' 
					+'</div>'+'</h3>'+'<div class="comments large-10 columns">'
					+'<p>'+'See if this works'+'</p>'+'</div>';
$(document).ready(function(){
	Accordion();
	Append();

});