const burgerMenuButton = document.querySelector("#burgerMenuButton");
const mainMenuBlock = document.querySelector(".header__list");
const logo = document.querySelector(".header__logoButton");
const colseIconHeader = document.querySelector("#colseIconHeader");

const subscribeInput = document.querySelector("#singUpInput");
const singUpButton = document.querySelector("#singUpButton");
const singUpButton1 = document.querySelector(".studyComposition__button");
const singUpButton2 = document.querySelector(".searchingOrders__button");
const singUpBlock = document.querySelectorAll(".singUp");

function addClassList(element, newClassList) {
  element.classList.add(newClassList);
}
function removeClassList(element, removableClassList) {
  element.classList.remove(removableClassList);
}

function openHeaderMenu(button) {
  button.addEventListener("click", function () {
    addClassList(logo, "effects_notVisible");
    addClassList(burgerMenuButton, "effects_notVisible");
    addClassList(mainMenuBlock, "effects_visible");
    addClassList(colseIconHeader, "effects_visible");
    console.log("re-re");
  });
}
openHeaderMenu(burgerMenuButton);

function colseHeaderMenu(button) {
  button.addEventListener("click", function () {
    removeClassList(logo, "effects_notVisible");
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