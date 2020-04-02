let render2 = array => {
    let elementText = "";

    array.forEach(
        item =>
        (elementText =
            elementText +
            `<div class="card">
    <div class="img">
      <img src="${item.strDrinkThumb}" alt="" />
    </div>
    <div class="details">
      <h3>${item.strDrink}</h3>
      <span class="go-to-drink" id="${item.idDrink}">go to drink</span>
      
    </div>
  </div>`)
    );

    container.insertAdjacentHTML("beforeend", elementText);
};
let render = array => {
    container.innerHTML = "";
    let elementText = "";

    Array.from(array).forEach(item => {
        let finalIngredientsArr = [];
        let ingredientsArr = [
            item.strIngredient1,
            item.strIngredient2,
            item.strIngredient3,
            item.strIngredient4,
            item.strIngredient5,
            item.strIngredient6,
            item.strIngredient7,
            item.strIngredient8,
            item.strIngredient9,
            item.strIngredient10,
            item.strIngredient11,
            item.strIngredient12,
            item.strIngredient13,
            item.strIngredient14,
            item.strIngredient15
        ];
        ingredientsArr.forEach(item => {
            if (item !== null) finalIngredientsArr.push(item);
        });

        elementText =
            elementText +
            `<div class="card">
      <div class="img">
        <img src="${item.strDrinkThumb}" alt="" />
      </div>
      <div class="details">
        <h3>${item.strDrink}</h3>
        <p class="Ingredients">${finalIngredientsArr}<button>add to shopping list</button></p>
        <span>details</span>
        <div class="instructions">
          <p>${item.strInstructions} <span>X</span></p>
        </div>
      </div>
    </div>`;
    });

    container.insertAdjacentHTML("beforeend", elementText);
};

export {
    render,
    render2
}