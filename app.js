$(document).ready(function(){
  $('.box').on('click', function(){
		$(this).addClass('white');
	})
	$('.box').on('dblclick', function(){
		$(this).removeClass('white');
	})
	$('#reset').on('click', function(){
		$('.box').addClass('white');
	})
	var color = 'white';
	var colors = 'red blue green yellow white';
	
	$('#red').on('click', function() {
		color = 'red';
	})
	
	$('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })
	
	$('.box').on('click', function() {
		$(this).addClass(color);
	})
	
	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	})
	
	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	})
	
	//////////////////////////////////////////////////
	var isDragging = false;
	$('.box').mousedown(function(){
		isDragging = true;
	})
	
	$('.box').mouseup(function(){
			isDragging = false;
	})
	
	$('.box').mouseover(function(){
		if (isDragging){
			$(this).addClass(color);
		}
	})
		
	
	
})