function itm_bullet() {
	var bullet = "";
	bullet += "<span class='bullet'></span>";
	return bullet;
}
function itm_powered_by() {
	var logo = "";
	logo += "<p id='powered'>Powered by</p>";
	logo += "<h1>";
	logo += "	<a href='http://www.itmaniax.com' title='Visit www.itmaniax.com' target='_blank' tabindex='-1'>";
	logo += "	</a>";
	logo += "</h1>";
	return logo;
}
function center_content() {
	var window_height = $(window).height(),
		content_height = $('#login').height(),
		content_top = ((window_height - content_height)/2)-120;

	if(content_top < 20) {
       content_top = 20;
    }
	
	$('body').css('min-height',window_height);
	$('#content').css({'padding-top':content_top});
}
$(document).ready(function() {
	$("body").addClass('login login-action-login');
	$("#header, #footer, .form-group label, .input-group-addon, button i").hide();
	$(".panel").attr('id', 'login').find(".text-right").addClass("submit").removeClass("text-right");
	center_content();
	
	//Power by
	$(itm_powered_by()).prependTo($("form"));
	
	//Replace the default placeholder
	$("form").find("input[name='username']").attr("placeholder", "Nume utilizator");
	$("form").find("input[name='password']").attr("placeholder", "Parolă");
	$("form").find("input[name='email']").attr("placeholder", "Adresă de e-mail");
	
	//Add the bullet to input
	$(".input-group").append(itm_bullet());
	
	//Password forgotten
	$(".help-block").detach().appendTo("form");
	$(".help-block a").text("Ți-ai uitat parola ?");
	$(".submit a").removeClass("btn btn-default").attr("data-original-title", "Autentificare")
	.addClass("help-block").text("Autentificare");
	
	//Message errors
	$("button[type='submit']").on("click", function(e) {
		var name = $("input[name='username']").val(),
			password = $("input[name='password']").val();
			email = $("input[name='email']").val();
		
	});
});
$(window).resize(function() {
	center_content();
});
