const burgerMenuButton = document.querySelector("#burgerMenuButton");
const mainMenuBlock = document.querySelector(".header__list");
const logo = document.querySelector(".header__logoButton");
const colseIconHeader = document.querySelector("#colseIconHeader");

const subscribeInput = document.querySelector("#singUpInput");
const singUpButton = document.querySelector("#singUpButton");

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
    console.log("re-re");
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
