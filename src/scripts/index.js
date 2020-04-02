// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";

// Import any additional modules you want to include below \/
import "regenerator-runtime/runtime";
import getRequest from "./getRequest"
import {
  render,
  render2
} from "./render"
// \/ All of your javascript should go here \/

let data = [];
let data1 = [];
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const optionSelect = document.querySelector("#select");
const randomBTN = document.querySelector("#random");
const container = document.querySelector(".sss");
let goToDrink = document.querySelector(".go-to-drink");
const init = evt => {
  evt.preventDefault();
  container.textContent = "";
  getRequest(searchInput.value, optionSelect.value).then(() =>
    optionSelect.value === "i" ? render2(data) : render(data)
  );
};


let handleDrinkEvent = async evt => {
  console.log(evt.target.id);

  let response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${evt.target.id}`
  );
  data1 = [];
  let responseJSON = await response.json();
  console.log(responseJSON);
  data1.push(responseJSON.drinks[0]);
  render(data1);
  console.log("data1", data1);
};
//getCocktailByID;

//getIDbyIngredient


form.addEventListener("submit", init);
container.addEventListener("click", handleDrinkEvent);

randomBTN.addEventListener("click", random)