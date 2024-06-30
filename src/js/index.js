// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const formElement = document.getElementById("form");
const nameElement = document.getElementById("name");
const numberElement = document.getElementById("number");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
const cvcElement = document.getElementById("cvc");
const cardNameElement = document.getElementById("card-name");
const cardNumberElement = document.getElementById("card-number");
const cardMonthElement = document.getElementById("card-month");
const cardYearElement = document.getElementById("card-year");

const checkForm = (event) => {
  event.preventDefault();
};
formElement.addEventListener("submit", checkForm);

const introducingName = (event) => {
  nameElement.value = cardNameElement.textContent;
  console.log(introducingName);
};
nameElement.addEventListener("input", introducingName);
