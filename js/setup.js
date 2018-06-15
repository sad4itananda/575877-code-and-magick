'use strict';

var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;
var blockSetup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var showSetup = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  blockSetup.classList.remove('hidden');
};

var getRandomInt = function (minIn, maxIn) {
  return Math.floor(Math.random() * (maxIn - minIn + 1)) + minIn;
};

var getRandomArrayElement = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};

var getArrayOfRandomWizards = function () {
  var newArr = [];
  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    newArr[i] = {};
    if (getRandomInt(0, 1)) {
      newArr[i].name = getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SURNAMES);
    } else {
      newArr[i].name = getRandomArrayElement(SURNAMES) + ' ' + getRandomArrayElement(NAMES);
    }
    newArr[i].coatColor = getRandomArrayElement(COAT_COLORS);
    newArr[i].eyesColor = getRandomArrayElement(EYES_COLORS);
  }
  return newArr;
};

var drawSimilarWizards = function (arrOfWizards) {
  for (var i = 0; i < arrOfWizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arrOfWizards[i].name;
    wizardElement.querySelector('.wizard-eyes').style.fill = arrOfWizards[i].eyesColor;
    wizardElement.querySelector('.wizard-coat').style.fill = arrOfWizards[i].coatColor;
    similarListElement.appendChild(wizardElement);
  }
};

var init = function () {
  showSetup();
  var wizards = getArrayOfRandomWizards(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);
  drawSimilarWizards(wizards);
};

init();
