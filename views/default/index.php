<?php
use shahimian\aceydu\Assets;

Assets::register($this);
?>

<button id="start-game">Start Game</button>

<div class="deck">
	<div id="paper-1" class="paper" data-paper="">
		<div class="type"></div>
		<div class="num"></div>
		<div class="img"></div>
	</div>
	<div id="paper-2" class="paper">
		<div class="type"></div>
		<div class="num"></div>
		<div class="img"></div>
	</div>
	<div id="paper-3" class="paper" data-paper="">
		<div class="type"></div>
		<div class="num"></div>
		<div class="img"></div>
	</div>
</div>

<div id="control">
	<div id="charge"><span>0</span>$</div>
	<div id="ignore">Ignore: <span></span></div>
	<input value="" type="number" id="bet"/>$<button id="bet-btn">Bet!</button><button id="pass">Pass</button>
</div>