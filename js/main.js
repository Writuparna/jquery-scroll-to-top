jQuery(document).ready(function($) {
	$("a[href='#top']").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop:0},1000);
	});
	$('.submitBtn').attr('disabled','disabled');
	$('.check').click(function(){
		if($('.submitBtn').is(':disabled')){
			$('.submitBtn').removeAttr('disabled');
		}else{
			$('.submitBtn').attr('disabled','disabled');
		}
	});
	function blinkText(){
		$(".tablist").fadeIn(500);
		$(".tablist").fadeOut(500);
	};
	//setInterval(blinkText,500);
	$('.tableList').find('tr:odd').addClass('newColor');
	$('.print').on('click', function(e){
		e.preventDefault();
		window.print();
	});
	$("#comment").keyup(function(){
		var maxlength = 15;
		var textlength = $(this).val().length;
		$('.limit').text("Your text length is" + textlength);
		if((maxlength-textlength)==0){
			$('.limit').append(". You have crossed your limit. Not more than"+ maxlength );
		}
	});
	var text = $("ul.tablist li");
	$(text).html(text.html().replace(/^(\w+)/, '<strong>$1</strong>'));


	$("#createDiv").click(function(e){
		e.preventDefault();
		var $newDiv = $('<div>', 'testClass');
		$newDiv.html('Hello tua');
		$('body').append($newDiv);
	});

	$('.insertDiv').click(function(e){
		e.preventDefault();
		if(($(this).parent().attr("class"))=='selectDiv'){
			$(this).detach().appendTo('.unselectDiv');
		}else{
			$(this).detach().appendTo('.selectDiv');			
		};
		console.log($(this).parent().attr("class"));
	})
	var colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };  

	$.each(colors,function(key, value){
		$('.tablist').append($('<li>',{
			value : key,
			text : value
		}))
	})
});
jQuery(document).bind('contextmenu',function(e){
	return false;
})