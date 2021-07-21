Crafty.defineScene("Game", function() {
	
	var redSquare = Crafty.e('2D, DOM, Color, Twoway, Gravity')
		.attr({x: 0, y: 0, w: 100, h: 100})
		.color('#F69')
		.twoway(200)
		.gravity("solid");

	var platform = Crafty.e('2D, DOM, Color, solid')
		.attr({x: 0, y: 900, w: 200, h: 30})
		.color('purple');

	var platform1 = Crafty.e('2D, DOM, Color, solid')
		.attr({x: 200, y: 300, w: 30, h: 300})
		.color('purple');

	var platform2 = Crafty.e('2D, DOM, Color, solid')
		.attr({x: 0, y: 300, w: 200, h: 30})
		.color('purple');
});