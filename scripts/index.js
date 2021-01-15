let editButton = document.querySelector(".edit");
let closeButton = document.querySelector(".close-icon");
let formElement = document.querySelector(".form");

let popup = document.querySelector(".popup");

let fieldName = document.querySelector(".field-name");
let fieldAbout = document.querySelector(".field-about");

let profileTitle = document.querySelector(".profile-info__title");
let profileSubtitle = document.querySelector(".profile-info__subtitle");

function handleFormSubmit (evt){
  evt.preventDefault();

  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;

  togglePopup();
}

function togglePopup() {

    if (!popup.classList.contains('popup_open')) {
      fieldName.value = profileTitle.textContent;
      fieldAbout.value = profileSubtitle.textContent;
    //added after review #1//
    }
    popup.classList.toggle("popup_open");
}

formElement.addEventListener("submit", handleFormSubmit);

editButton.addEventListener("click", togglePopup)
closeButton.addEventListener("click", togglePopup) 
