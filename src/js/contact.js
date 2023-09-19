const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const textarea = document.querySelector("#msg");
const allInputs = [inputName, inputEmail];
const sendBtn = document.querySelector(".contact__form-btn--send");
const clearBtn = document.querySelector(".contact__form-btn--clear");
const popup = document.querySelector(".contact__form-popup");

const checkForm = (inputs) => {
  inputs.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder.substring(1));
    } else {
      clearError(el);
    }
  });
  if (textarea.value === "") {
    showError(textarea, textarea.placeholder);
  } else {
    clearError(textarea);
  }
};

const showError = (input, msg) => {
  //argument input przechowuje nasze inputy
  //argument msg przechuwouje pleceholder

  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".contact__error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkLength = (input, min) => {
  if (input.value.length > 0 && input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.textContent.slice(
        0,
        -1
      )} musi składać się z min. ${min} znaków.`
    );
  }
};

const checkMail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "E-mail jest niepoprawny");
  }
};

const checkErrors = () => {
  const formBoxes = document.querySelectorAll(".contact__form-box");
  let errorCount = 0;
  formBoxes.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });

  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
};

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  allInputs.forEach((el) => {
    el.value = "";
    el.parentElement.classList.remove("error");
  });
  textarea.value = "";
  textarea.parentElement.classList.remove("error");
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm(allInputs);
  checkLength(inputName, 3);
  if (inputEmail.value.length > 0) checkMail(inputEmail);
  checkLength(textarea, 10);
  checkErrors();
});
