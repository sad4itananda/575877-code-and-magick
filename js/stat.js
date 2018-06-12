'use strict';

var START_X = 100;
var START_Y = 10;
var COORD_X = 150;
var COORD_Y = 250;
var SHIFT_COLUMN = 90;
var COLUMN_WIDTH = 40;

var drawFigure = function (shiftX, shiftY, color, ctx) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(START_X + shiftX, START_Y + shiftY);
  ctx.lineTo(START_X + shiftX + 210, START_Y + shiftY - 10);
  ctx.lineTo(START_X + shiftX + 420, START_Y + shiftY + 0);
  ctx.lineTo(START_X + shiftX + 410, START_Y + shiftY + 145);
  ctx.lineTo(START_X + shiftX + 420, START_Y + shiftY + 280);
  ctx.lineTo(START_X + shiftX + 200, START_Y + shiftY + 270);
  ctx.lineTo(START_X + shiftX + 0, START_Y + shiftY + 280);
  ctx.lineTo(START_X + shiftX + 10, START_Y + shiftY + 145);
  ctx.lineTo(START_X + shiftX + 0, START_Y + shiftY + 10);
  ctx.fill();
  ctx.closePath();
};

var getMaxTime = function (times) {
  var max = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }
  return max;
};

var drawColumns = function (color, columnHeight, ctx, names, times, i, CoordX) {
  ctx.fillStyle = color;
  ctx.fillRect(CoordX, COORD_Y, COLUMN_WIDTH, -columnHeight);
  ctx.fillStyle = 'black';
  ctx.fillText(names[i], CoordX, COORD_Y + 15);
  ctx.fillText(+Math.round(times[i]), CoordX, -columnHeight + 240);
};

var drawGistogramm = function (ctx, names, times) {
  var maxColumn = getMaxTime(times); var CoordX = COORD_X;
  for (var i = 0; i < times.length; i++) {
    var random = Math.round(Math.random() * 10) / 10;
    var anotherColor = 'rgba(0, 0, 255, ' + random + ')';
    var columnHeight = times[i] / maxColumn * 150;
    if (names[i] === 'Вы') {
      drawColumns('rgba(255, 0, 0, 1)', columnHeight, ctx, names, times, i, CoordX);
    } else {
      drawColumns(anotherColor, columnHeight, ctx, names, times, i, CoordX);
    }
    CoordX += SHIFT_COLUMN;
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawFigure(10, 10, 'rgba(0, 0, 0, 0.7)', ctx);
  drawFigure(0, 0, 'rgba(255, 255, 255, 1)', ctx);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 240, 30);
  ctx.fillText('Список результатов:', 230, 60);

  drawGistogramm(ctx, names, times);
};


