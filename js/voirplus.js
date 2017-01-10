$(document).ready(function() {
  
	$(".enSavoirPlus").prev().slideToggle();
	$(".enSavoirPlus").click(function()
	{
		$(this).prev().slideToggle();
		if ($(this).html() == 'En savoir <span class="plus">+</span>')
		{
			$(this).html('Voir <span class="plus">-</span>');
		}
		else
		{
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

