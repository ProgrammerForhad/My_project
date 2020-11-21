$(document).ready(function(){
	//search section..
	$(".search").on("click",function(){
		$("#search").fadeIn(500);
	});
	$(".close_search i").click(function(){
		$("#search").fadeOut(500);
	});
	//such section..
	$(".such_2").on("click",function(){
		$(".such_1").css({backgroundColor:"#fff",color:"#ff875b"});
		$(this).css({backgroundColor:"#24c373",color:"#fff"});
	});
	$(".such_1").on("click",function(){
		$(".such_2").css({backgroundColor:"#fff",color:"#ff875b"});
		$(this).css({backgroundColor:"#24c373",color:"#fff"});
	});
	
	//this is circle box section...
	
		//cricle 1
	$(".cricle_main_1").hover(function(){
		$(this).addClass("action");
		$(".cirItem_12").removeClass("action");
		$(".cirItem_13").removeClass("action");
		$(".cricle_main_2").removeClass("action");
		$(".cirItem_22").removeClass("action");
		$(".cirItem_23").removeClass("action");
			//text change
		$("#circle_h").text("Recession Strategies")
		$("#circle_p1").text("One of the new trends in the banking")
		$("#circle_p2").text("industry, ensuring fail-safe security will")
		$("#circle_p3").text("also be a core question.")
	});
		//cricle 2
	$(".cirItem_12").hover(function(){
		$(this).addClass("action");
		$(".cricle_main_1").removeClass("action");
		$(".cirItem_13").removeClass("action");
		$(".cricle_main_2").removeClass("action");
		$(".cirItem_22").removeClass("action");
		$(".cirItem_23").removeClass("action");
			//text change
		$("#circle_h").text("Advanced Analytic")
		$("#circle_p1").text("This change will require you to rethink")
		$("#circle_p2").text("the way you’ve always done things and")
		$("#circle_p3").text("adopt a new mindset.")
	});
		//cricle 3
	$(".cirItem_13").hover(function(){
		$(this).addClass("action");
		$(".cricle_main_1").removeClass("action");
		$(".cirItem_12").removeClass("action");
		$(".cricle_main_2").removeClass("action");
		$(".cirItem_22").removeClass("action");
		$(".cirItem_23").removeClass("action");
			//text change
		$("#circle_h").text("Corporate Finance")
		$("#circle_p1").text("From implantables to wearables,")
		$("#circle_p2").text("embedded system software has become")
		$("#circle_p3").text("an integrated part of our lives.")
	});
		//cricle 4
	$(".cricle_main_2").hover(function(){
		$(this).addClass("action");
		$(".cricle_main_1").removeClass("action");
		$(".cirItem_12").removeClass("action");
		$(".cirItem_13").removeClass("action");
		$(".cirItem_22").removeClass("action");
		$(".cirItem_23").removeClass("action");
			//text change
		$("#circle_h").text("Partnership System")
		$("#circle_p1").text("We help companies across all markets")
		$("#circle_p2").text("continue to push the boundaries of")
		$("#circle_p3").text("hardware and software design.")
	});
		//cricle 5
	$(".cirItem_22").hover(function(){
		$(this).addClass("action");
		$(".cricle_main_1").removeClass("action");
		$(".cirItem_12").removeClass("action");
		$(".cirItem_13").removeClass("action");
		$(".cricle_main_2").removeClass("action");
		$(".cirItem_23").removeClass("action");
			//text change
		$("#circle_h").text("Brand Integration")
		$("#circle_p1").text("We have the technology and industry")
		$("#circle_p2").text("expertise to develop solutions that can")
		$("#circle_p3").text("connect people and businesses.")
	});
		//cricle 6
	$(".cirItem_23").hover(function(){
		$(this).addClass("action");
		$(".cricle_main_1").removeClass("action");
		$(".cirItem_12").removeClass("action");
		$(".cirItem_13").removeClass("action");
		$(".cricle_main_2").removeClass("action");
		$(".cirItem_22").removeClass("action");
			//text change
		$("#circle_h").text("Information Technology")
		$("#circle_p1").text("Strategy experience and analytical")
		$("#circle_p2").text("expertise combine to enable decision")
		$("#circle_p3").text("making and create value.")
	});
	
	// Back to Top ...
	$("#backTop").on("click",function(){
		$("body,html").animate({scrollTop : "0"},1000);
	});
	$(document).on("scroll",function(){
		if($(this).scrollTop() > 600){
			$("#backTop").css("right","20px");
		}else{
			$("#backTop").css("right","-9999px");
		}
	});
	// Comment client seciton ...
	$(".comment_text").hover(function(){
	$(".search_1right").animate({left:"30px"},80);
	$(".search_left").animate({left:"1089px"},80);
	
	},function(){
		$(".search_1right").animate({left:"0px"},80);
		$(".search_left").animate({left:"1119px"},80);
	});
	
	
	$(".search_right").hover(function(){
	$(".search_1right").animate({left:"30px"},80);
	$(".search_left").animate({left:"1089px"},80);
	
	},function(){
		$(".search_1right").animate({left:"0px"},80);
		$(".search_left").animate({left:"1119px"},80);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
