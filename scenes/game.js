Crafty.defineScene("Game", function() {
	
	var redSquare = Crafty.e('2D, DOM, Color, Twoway, Gravity')
		.attr({x: 0, y: 0, w: 100, h: 100})
		.color('#F69')
		.twoway(200)
		.gravity("solid");

	var platform = Crafty.e('2D, DOM, Color, solid')
		.attr({x: 0, y: 150, w: 200, h: 30})
		.color('purple');

	var platform1 = Crafty.e('2D, DOM, Color, solid')
		.attr({x: 200, y: 150, w: 30, h: 300})
		.color('purple');

	var platform2 = Crafty.e('2D, DOM, Color, solid')
		.attr({x: 200, y: 450, w: 100, h: 30})
		.color('purple');

	var platform3 = Crafty.e('2D, DOM, Color, solid')
		.attr({x: 200, y: 450, w: 300, h: 30})
		.color('purple');

	var platform4 = Crafty.e('2D, DOM, Color, solid')
		.attr({x: 500, y: 300, w: 300, h: 30})
		.color('purple');
});