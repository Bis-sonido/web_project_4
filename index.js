const editButton = document.querySelector(".edit");
const closeButton = document.querySelector(".close-icon");
const formElement = document.querySelector(".form");

const fieldName = document.querySelector(".field-name__box");
const fieldAbout = document.querySelector(".field-about__box");

const profileTitle = document.querySelector(".profile-info__title");
const profileSubtitle = document.querySelector(".profile-info__subtitle");

function handleFormSubmit (evt){
  evt.preventDefault();

  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;
}
function togglePopup() {
  const popup = document.querySelector(".popup");
  popup.classList.toggle("popup_open");

}
formElement.addEventListener("submit", handleFormSubmit);

editButton.addEventListener("click", togglePopup)
closeButton.addEventListener("click", togglePopup) 
