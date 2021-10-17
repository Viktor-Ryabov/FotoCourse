const burgerMenuButton = document.querySelector("#burger-menu-button");
const mainMenuBlock = document.querySelector(".header__list");
const logo = document.querySelector(".header__logo-button");
const colseIconHeader = document.querySelector("#colse-icon-header");
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
    addClassList(closeIcon, "header__close-icon_open");
    addClassList(headerLogo, "header__logo-button-link_open");
    addClassList(listMenu, "header__list_open");
    addClassList(header, "header_phone-size");
    addClassList(burgerMenuButton, "effects_not-visible");
    addClassList(mainMenuBlock, "effects_visible");
    addClassList(colseIconHeader, "effects_visible");
    burgerMenuButton.style.display = "none";
    mainMenuBlock.style.display = "flex";
    colseIconHeader.style.display = "block";
    
  });
}
openHeaderMenu(burgerMenuButton);

function colseHeaderMenu(button) {
  button.addEventListener("click", function () {
    removeClassList(closeIcon, "header__close-icon_open");
    removeClassList(headerLogo, "header__logo-button-link_open");
    removeClassList(listMenu, "header__list_open");
    removeClassList(header, "header_phone-size");
    removeClassList(burgerMenuButton, "effects_not-visible");
    removeClassList(mainMenuBlock, "effects_visible");
    removeClassList(colseIconHeader, "effects_visible");
    burgerMenuButton.style.display = "block";
    mainMenuBlock.style.display = "none";
    colseIconHeader.style.display = "none";

  });
}
colseHeaderMenu(colseIconHeader);

function addInputListener(input) {
  input.addEventListener("click", () => (input.value = ""));
}
addInputListener(subscribeInput);

function sendEmailForSubscribe(button, input) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
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