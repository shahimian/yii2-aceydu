"use strict";

var yourmoney = 100;
var ignore = 0;
var num1 = 0, num2 = 0, num3 = 0,
	r1 = 0, r2 =0, r3,
	type1 = 0, type2 = 0, type3 = 0;

function gamePlay(){
	$("#paper-1, #paper-2, #paper-3, #bet-btn, #pass").show();
	$("#paper-2").addClass("back");
	$("#paper-1").css("transform", "rotateZ("+( Math.floor(Math.random() * 6) + 357 )+"deg)");
	$("#paper-2").css("transform", "rotateZ("+( Math.floor(Math.random() * 6) + 357 )+"deg)");
	$("#paper-3").css("transform", "rotateZ("+( Math.floor(Math.random() * 6) + 357 )+"deg)");
	$(".img").removeClass().addClass("img");
	$(".paper > div:first-child").removeClass(["t1", "t2", "t3", "t4"]);
	$("#paper-2 .num").text("");
	$("#charge span").text(yourmoney);
	var r1 = 0, r3 = 0, num1 = 0, num3 = 0;
	while(!r1 || !r3 || Math.abs(num1 - num3) < 2){
		r1 = Math.floor(Math.random() * 52);
		r3 = Math.floor(Math.random() * 52);
		num1 = (r1 % 13)+1;
		num3 = (r3 % 13)+1;
	}
	var type1 = Math.ceil(r1 / 13);
	var type3 = Math.ceil(r3 / 13);
	$("#paper-1 div.img").addClass(paperImg(paper(num1))+"-"+type1)
	$("#paper-1 .type").addClass("t" + type1);
	$("#paper-1 .num").text(paper(num1));
	$("#paper-1").attr("data-paper", num1);
	$("#paper-3 div.img").addClass(paperImg(paper(num3))+"-"+type3)
	$("#paper-3 .type").addClass("t" + type3);
	$("#paper-3 .num").text(paper(num3));
	$("#paper-3").attr("data-paper", num3);	
	if(yourmoney > 170 || yourmoney < 0){
		$("#msg").show();
		yourmoney = 100;
		ignore = 0;
		$("#charge span").text(yourmoney);
		$("#ignore span").text(ignore);
	}
	if(yourmoney > 170){
		$("#msg div").text("you're win! let's play again!");
	}
	if(yourmoney < 0){
		$("#msg div").text("come on man! you're broke! let's play again! be carefully!");
	}
	
}

$("#msg button").click(function(){
	$(this).parent().hide();
})

$("#start-game").click(function(e){
	$(this).hide();
	gamePlay();
	$("#control").show();
	$("#ignore span").text(ignore);
});

$("#bet-btn").click(function(e){
	$(this).hide();
	$("#pass").hide();
	var bet = parseInt($("#bet").val());
	if(bet > yourmoney * 0.6){
		var d = Math.ceil(yourmoney * 0.02);
		$("#msg").show();
		$("#msg div").text("you are so prodigal man! sum your focus up! i suggest you cost " + d + "$ fairly.");
		$("#bet").val(d);
	} else {
		initUnveiling();
		var min = num1;
		var max = num3;
		if(min > num3) {
			min = num3;
			max = num1;
		}
		if(min < num2 && num2 < max){
			yourmoney += bet;
		} else {
			yourmoney -= bet;
		}
		$("#charge span").text(yourmoney);
	}
	unveiling();
})

$("#pass").click(function(e){
	ignore++;
	if(ignore > 3){
		yourmoney -= 1;
		ignore = 0;
	}
	initUnveiling();
	$("#ignore span").text(ignore);
	unveiling();
})

function unveiling(){
	setTimeout(function(){gamePlay();}, Math.floor(Math.random() * 2000 + 3000));	
}

function initUnveiling(){
	num1 = parseInt($("#paper-1").attr("data-paper"));
	num3 = parseInt($("#paper-3").attr("data-paper"));
	r2 = num1;
	while(r2 == num1){
		var tmp = Math.floor(Math.random() * 52);
		if(num1 != tmp && num3 != tmp)
			r2 = tmp;
	}
	num2 = (r2 % 13)+1;
	type2 = Math.ceil(r2 / 13);
	$("#paper-2").removeClass("back");	
	$("#paper-2 div.img").addClass(paperImg(paper(num2))+"-"+type2);
	$("#paper-2 .type").addClass("t" + type2);
	$("#paper-2 .num").text(paper(num2));
}


function paper(n){
	if(11 == n)
		return "J";
	else if(12 == n)
		return "Q";
	else if(13 == n)
		return "K";
	else if(1 == n)
		return "A";
	return n;
}

function paperImg(n){
	if("J" == n)
		return "jack";
	else if("Q" == n)
		return "queen";
	else if("K" == n)
		return "king";
	return n;
}
