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
  
  
});

