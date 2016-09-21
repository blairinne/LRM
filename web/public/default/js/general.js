$(".lorem").hover(function(){
		//$(this).parent().find(".boxIntro").show();
		$(this).parent().find(".lorem").css("opacity",1);

	}, function(){
		//$(this).parent().find(".boxIntro").hide();
		$(this).parent().find(".lorem").css("opacity",0);

	});

