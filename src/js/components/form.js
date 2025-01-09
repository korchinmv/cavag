import { validateForms } from "./../functions/validate-forms.js";

const textarea = document.querySelector(".input-textarea");
textarea.addEventListener("keyup", () => {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
});

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

const rulesFooterForm = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Слишком короткое имя",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
      {
        rule: "customRegexp",
        value: /^[A-zА-я]+$/i,
        errorMessage: "Имя должно содержать буквы",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-mail",
    mailError: "Введите корректно адресс почты",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите свою почту",
      },
      {
        rule: "email",
        errorMessage: "Не верно указана почта",
      },
    ],
  },
  {
    ruleSelector: ".input-textarea",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите сообщение!",
      },
    ],
  },
];

const rulesRequestForServicesForm = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-company",
    rules: [
      {
        rule: "minLength",
        value: 1,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните название компании!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-mail",
    mailError: "Введите корректно адресс почты",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите свою почту",
      },
      {
        rule: "email",
        errorMessage: "Не верно указана почта",
      },
    ],
  },
  {
    ruleSelector: ".input-textarea",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите сообщение!",
      },
    ],
  },
  {
    ruleSelector: ".input-company",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите название компании",
      },
    ],
  },
];

const rulesCallbackForm = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

validateForms("#footer-form", rulesFooterForm, afterForm);

//popups
validateForms(
  "#request-for-services-form",
  rulesRequestForServicesForm,
  afterForm
);
validateForms("#callback-form", rulesCallbackForm, afterForm);
validateForms("#request-kp-form", rulesRequestForServicesForm, afterForm);
validateForms("#write-us-form", rulesRequestForServicesForm, afterForm);
