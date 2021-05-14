'use strict'

//Добавляет время расписания прогулки

let buttonMore = document.querySelector(".travels__item-btn");
let itemMoreTimes = document.querySelectorAll(".travels__item--more");

buttonMore.onclick = function (evt) {
  evt.preventDefault();
  for (let itemMoreTime of itemMoreTimes) {
    itemMoreTime.classList.toggle("travels__item--more-add");
  };
};
