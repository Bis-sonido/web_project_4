const showErrorMessage = function(input, form, {errorClass, inputErrorClass, ...others}) {
  const error = document.querySelector("#" + input.id + "-error");
  error.textContent = input.validationMessage;

  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

const hideErrorMessage = function(input, form, {errorClass, inputErrorClass, ...others}) {
  const error = document.querySelector("#" + input.id + "-error");
  error.textContent = "";

  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}

const checkInputValidity = function(input, form, others) {
  if(input.validity.valid) {
    hideErrorMessage(input, form, others)
  } else {
    showErrorMessage(input, form, others)
  }
}

 const toggleButtonState = function(inputs, button, {inactiveButtonClass, ...others}) {
  const isValid = inputs.every((input) => input.validity.valid)

  if(isValid) {
    button.classList.remove(inactiveButtonClass);
  } else {
    button.classList.add(inactiveButtonClass);
  };
};

const enableValidation = function({formSelector, inputSelector, submitButtonSelector, ...others}) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    form.addEventListener("submit", ((evt) => {
      evt.preventDefault();
    }));

    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, form, others)
        toggleButtonState(inputs, button, others)
      });
    });

  });

}
enableValidation({
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}); 