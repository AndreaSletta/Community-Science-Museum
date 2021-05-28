// contact form validation
window.onload = function () {
  const button = document.querySelector("#contactsend");

  const form = document.querySelector("#contact");

  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");

  const email = document.querySelector("#contactemail");
  const emailError = document.querySelector("#emailError");

  const text = document.querySelector("#text");
  const textError = document.querySelector("#messageError");

  //

  function validateForm() {
    if (checkLength(name.value, 0)) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }

    if (validateEmail(email.value)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    if (checkLength(text.value, 0)) {
      textError.style.display = "none";
    } else {
      textError.style.display = "block";
    }

    // confirm

    if (
      checkLength(name.value, 0) &&
      validateEmail(email.value) &&
      checkLength(text.value, 0)
    ) {
      form.innerHTML +=
        "<h3>" +
        "We have recieved your message and will respond to you soon!" +
        "</h3>";
    }
  }

  button.addEventListener("click", validateForm);

  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }
};
