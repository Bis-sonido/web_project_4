let editButton = document.querySelector(".edit");
let closeButton = document.querySelector(".close-icon");
let formElement = document.querySelector(".form");

let fieldName = document.querySelector(".field-name__box");
let fieldAbout = document.querySelector(".field-about__box");

let profileTitle = document.querySelector(".profile-info__title");
let profileSubtitle = document.querySelector(".profile-info__subtitle");

function handleFormSubmit (evt){
  evt.preventDefault();

  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;
}
function togglePopup() {
  let popup = document.querySelector(".popup");
  popup.classList.toggle("popup_open");

}
formElement.addEventListener("submit", handleFormSubmit);

editButton.addEventListener("click", togglePopup)
closeButton.addEventListener("click", togglePopup) 
