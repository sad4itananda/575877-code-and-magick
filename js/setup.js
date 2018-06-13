'use strict';
var blockSetup = document.querySelector('.setup');
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInt = function(minIn, maxIn) {
  return Math.floor(Math.random() * (maxIn - minIn + 1)) + minIn;
};

var getRandomParametr = function (array){
 return array[getRandomInt(0, array.length -1)]
};

var getArrayOfRandomWizards = function(names, surnames, colors, eyes) {
  var newArr = [];
  for (var i = 0; i < 4; i++) {
    newArr[i] = {};
    if (getRandomInt(0, 1)) {
      newArr[i].name = getRandomParametr(names) +' ' + getRandomParametr(surnames)
    };
    newArr[i].name = getRandomParametr(surnames) +' ' + getRandomParametr(names);
    newArr[i].coatColor = getRandomParametr(colors);
    newArr[i].eyesColor = getRandomParametr(eyes);
  }
  return newArr;
};

var drawSimilarWizards = function(arrOfWizards) {
  for (var i = 0; i < arrOfWizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arrOfWizards[i].name;
    wizardElement.querySelector('.wizard-eyes').style.fill = arrOfWizards[i].eyesColor;
    wizardElement.querySelector('.wizard-coat').style.fill = arrOfWizards[i].coatColor;
    similarListElement.appendChild(wizardElement);
  }
};

var wizards = getArrayOfRandomWizards(names, surnames, colors, eyes);
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
document.querySelector('.setup-similar').classList.remove('hidden');
blockSetup.classList.remove('hidden');



drawSimilarWizards(wizards);


// <template id="similar-wizard-template" style="display: none">
//   <div class="setup-similar-item">
//     <div class="setup-similar-content">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 86" class="setup-similar-wizard">
//         <g class="wizard">
//           <use xlink:href="#wizard-coat" class="wizard-coat"></use>
//           <use xlink:href="#wizard-head" class="wizard-head"></use>
//           <use xlink:href="#wizard-eyes" class="wizard-eyes"></use>
//           <use xlink:href="#wizard-hands" class="wizard-hands"></use>
//         </g>
//       </svg>
//     </div>
//     <p class="setup-similar-label">Петр Петров</p>
//   </div>
// </template>
