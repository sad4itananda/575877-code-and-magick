'use strict';

var START_X = 100;
var START_Y = 10;
var COORD_X = 150;
var COORD_Y = 250;
var SHIFT_COLUMN = 90;
var COLUMN_WIDTH = 40;
var anotherColor ="'rgba(255, 0, 0, " + random + ")'";
var columnHeight = times[i] / maxColumn * 150;

var drawFigure = function (shiftX, shiftY, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(START_X + shiftX, START_Y + shiftY);
    ctx.lineTo(START_X + shiftX + 210, START_Y + shiftY + 0);
    ctx.lineTo(START_X + shiftX + 420, START_Y + shiftY + 10);
    ctx.lineTo(START_X + shiftX + 410, START_Y + shiftY + 145);
    ctx.lineTo(START_X + shiftX + 420, START_Y + shiftY + 280);
    ctx.lineTo(START_X + shiftX + 200, START_Y + shiftY + 270);
    ctx.lineTo(START_X + shiftX + 0,   START_Y + shiftY + 280);
    ctx.lineTo(START_X + shiftX + 10,  START_Y + shiftY + 145);
    ctx.lineTo(START_X + shiftX + 0,   START_Y + shiftY + 10);
    ctx.fill();
    ctx.closePath();
  };

  var getMaxTime = function () {
    var max = times[0];
    for (var i = 1; i < times.length ; i++) {
      if (times[i] > max) {
        max = times[i];
      }
    }
    return max;
  };

  var drawGistogramm = function () {
    var maxColumn = getMaxTime ();
    for (var i = 0; i < times.length; i++) {
      var random = Math.round( Math.random () * 10 ) / 10;


      var drawColumns = function (color) {
        ctx.fillStyle = color;
        ctx.fillRect (COORD_X, COORD_Y, COLUMN_WIDTH, - columnHeight);
        ctx.fillStyle = 'black';
        ctx.fillText(names[i], COORD_X, COORD_Y + 15);
        ctx.fillText(+Math.round(times[i]), COORD_X, - columnHeight + 240);
        COORD_X += SHIFT_COLUMN;
      };
      if (names[i] == 'Вы') {
        drawColumns ('rgba(255, 0, 0, 1)');
      } else {
        drawColumns (anotherColor);
      }
    };
  };

window.renderStatistics = function (ctx, names, times) {
	drawFigure (10,10,'rgba(0, 0, 0, 0.7)');
	drawFigure (0,0,'rgba(255, 255, 255, 1)');

	ctx.fillStyle = 'black';
	ctx.font = '16px PT Mono';
	ctx.fillText ('Ура вы победили!', 240, 30);
	ctx.fillText ('Список результатов:', 230, 60);

	drawGistogramm ();
};

