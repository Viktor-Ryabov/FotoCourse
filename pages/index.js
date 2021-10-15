const burgerMenuButton = document.querySelector("#burger-menuButton");
const mainMenuBlock = document.querySelector(".header__list");
const logo = document.querySelector(".header__logo-button");
const colseIconHeader = document.querySelector("#colse-iconHeader");
const header = document.querySelector(".header");

const subscribeInput = document.querySelector("#sing-up-input");
const singUpButton = document.querySelector("#sing-up-button");
const singUpButton1 = document.querySelector(".study-composition__button");
const singUpButton2 = document.querySelector(".searching-orders__button");
const singUpBlock = document.querySelectorAll(".sing-up");
const listMenu = document.querySelector(".header__list");
const headerLogo = document.querySelector(".header__logo-button-link");
const closeIcon = document.querySelector(".header__close-icon");


function addClassList(element, newClassList) {
  element.classList.add(newClassList);
}
function removeClassList(element, removableClassList) {
  element.classList.remove(removableClassList);
}

function openHeaderMenu(button) {
  button.addEventListener("click", function () {
    addClassList(closeIcon, "header__closeIcon_open");
    addClassList(headerLogo, "header__logoButtonLink_open");
    addClassList(listMenu, "header__list_open");
    addClassList(header, "header_phoneSize");
    addClassList(burgerMenuButton, "effects_notVisible");
    addClassList(mainMenuBlock, "effects_visible");
    addClassList(colseIconHeader, "effects_visible");
  });
}
openHeaderMenu(burgerMenuButton);

function colseHeaderMenu(button) {
  button.addEventListener("click", function () {
    removeClassList(closeIcon, "header__closeIcon_open");
    removeClassList(headerLogo, "header__logoButtonLink_open");
    removeClassList(listMenu, "header__list_open");
    removeClassList(header, "header_phoneSize");
    removeClassList(burgerMenuButton, "effects_notVisible");
    removeClassList(mainMenuBlock, "effects_visible");
    removeClassList(colseIconHeader, "effects_visible");
  });
}
colseHeaderMenu(colseIconHeader);

function addInputListener(input) {
  input.addEventListener("click", () => (input.value = ""));
}
addInputListener(subscribeInput);

function sendEmailForSubscribe(button, input) {
  button.addEventListener("click", function () {
    button.textContent = "Спасибо!";
    input.value = "";
  });
}

sendEmailForSubscribe(singUpButton, subscribeInput);

function goToSingUpBlock(button){
  button.addEventListener("click", function(){
    window.scrollTo( 0, 9991000 );
  });
}
goToSingUpBlock(singUpButton1);
goToSingUpBlock(singUpButton2);