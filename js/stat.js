window.renderStatistics = function (ctx, names, times) {

	(function() {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';

		ctx.beginPath();
		ctx.moveTo(110, 20);
		ctx.lineTo(320, 10);
		ctx.lineTo(530, 20);
		ctx.lineTo(520, 155);
		ctx.lineTo(530, 290);
		ctx.lineTo(310, 280);
		ctx.lineTo(110, 290);
		ctx.lineTo(120, 155);
		ctx.lineTo(110, 20);
		ctx.fill();
		ctx.closePath();

		ctx.fillStyle = 'white';

		ctx.beginPath();
		ctx.moveTo(100, 10);
		ctx.lineTo(310, 0);
		ctx.lineTo(520, 10);
		ctx.lineTo(510, 145);
		ctx.lineTo(520, 280);
		ctx.lineTo(300, 270);
		ctx.lineTo(100, 280);
		ctx.lineTo(110, 145);
		ctx.lineTo(100, 10);
		ctx.fill();
		ctx.closePath();

		ctx.fillStyle = 'black';

		ctx.font = '16px PT Mono';
		ctx.fillText('Ура вы победили!', 240, 30);
		ctx.fillText('Список результатов:', 230, 60);
	}());

	function getMaxTime() {
		var max = times.length;
		for (var i = times.length-1; i >= 0; i--) {
			if (times[i] > max) {
				max = times[i];
			}
		}
		return max;
	};

	(function drowGistogramm() {

		var maxColumn = getMaxTime();
		var betweenColumn = 90;
		var CoordX = 150;

		for (var i = 0; i < times.length; i++) {
			    var random = Math.round( Math.random() * 10 ) / 10;
			    var anotherColor ="'rgba(0, 0, 255, " + random + ")'";
			    var columnHeight = times[i] / maxColumn * 150;

			if (names[i] == 'Вы') {
				ctx.fillStyle = 'rgba(255, 0, 0, 1)';
				ctx.fillRect (CoordX, 250, 40, - columnHeight);
				ctx.fillStyle = 'black';
				ctx.fillText(names[i], CoordX, 265);
				ctx.fillText(+times[i], CoordX, -columnHeight + 240);
				CoordX += betweenColumn;

			} else { console.log(anotherColor);
				ctx.fillStyle = anotherColor;
				ctx.fillRect (CoordX, 250, 40, - columnHeight);
				ctx.fillStyle = 'black';
				ctx.fillText(names[i], CoordX, 265);
				ctx.fillText(+Math.round(times[i]), CoordX, -columnHeight + 240);
				CoordX += betweenColumn;
			}
		};
	}());

};

