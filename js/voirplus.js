$(document).ready(function() {
  
	
	$(".enSavoirPlus").click(function()
	{
		
		if ($(this).html() == 'En savoir <span class="plus">+</span>')
		{
			$(this).prev().css("max-height", 1000);
			$(this).html('Voir <span class="plus">-</span>');
		}
		else
		{
			$(this).prev().css("max-height",$(this).prev().height());
			$(this).prev().css("max-height", "0");
			$(this).html('En savoir <span class="plus">+</span>');
		}
	});
	
	$(".menu-resp").click(function()
	{
		if($(".menu-resp").html() == "Menu")
		{
			$(".menu-resp").html("X");	
			$("nav ul").css("display", "block");
		}
		else
		{
			$(".menu-resp").html("Menu");
			$("nav ul").css("display", "none");
		}
	});
  
  
});

