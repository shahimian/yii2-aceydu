"use strict";

var yourmoney = 100;
var ignore = 0;

function gamePlay(){
	$("#paper-2").hide();
	$("#paper-1, #paper-3, #bet-btn, #pass").show();
	$(".img").removeClass().addClass("img");
	$(".paper > div:first-child").removeClass(["t1", "t2", "t3", "t4"]);
	$("#paper-2 .num").text("");
	$("#charge span").text(yourmoney);
	$("#bet").val(Math.floor(yourmoney * 0.02));
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
}

$("#start-game").click(function(e){
	$(this).hide();
	gamePlay();
	$("#control").show();
	$("#ignore span").text(ignore);
});

$("#bet-btn").click(function(e){
	$(this).hide();
	$("#pass").hide();
	var num1 = parseInt($("#paper-1").attr("data-paper"));
	var num3 = parseInt($("#paper-3").attr("data-paper"));
	var r2 = num1;
	while(r2 == num1){
		var tmp = Math.floor(Math.random() * 52);
		if(num1 != tmp && num3 != tmp)
			r2 = tmp;
	}
	var num2 = (r2 % 13)+1;
	var type2 = Math.ceil(r2 / 13);
	var bet = parseInt($("#bet").val());
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
	$("#paper-2").show();
	$("#paper-2 div.img").addClass(paperImg(paper(num2))+"-"+type2);
	$("#paper-2 .type").addClass("t" + type2);
	$("#paper-2 .num").text(paper(num2));
	setTimeout(function(){gamePlay();}, Math.floor(Math.random() * 2000 + 3000));
})

$("#pass").click(function(e){
	ignore++;
	if(ignore > 3){
		yourmoney -= 1;
		ignore = 0;
	}
	$("#ignore span").text(ignore);
	gamePlay();
})

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
