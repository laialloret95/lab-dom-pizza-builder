// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

let ingredientsValues = Object.values(ingredients)

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    };
  });
};

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach( mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    };
  });
};

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach( greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    };
  });
};

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  whiteSauce = document.querySelector(".sauce")
    if (state.whiteSauce) {
      whiteSauce.classList.add("sauce-white");
    } else {
      whiteSauce.classList.remove("sauce-white");
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // Given that buttons and Ingredient statuses are in the same order we can use a loop
  let buttons = document.querySelectorAll(".btn");
  let ingredientStatus = Object.values(state);

  for (let i=0; i< ingredientStatus.length; i++) {
    if (ingredientStatus[i]) {
      buttons[i].classList.add('active');
    } else {
      buttons[i].classList.remove('active');
    };
  };
};

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let cheesePizzaPrice = document.querySelector(".panel.price b");
  let finalPrice = document.querySelector(".panel.price strong");
  let pricePanel = document.querySelector(".panel.price ul");

  let ingredientStatus = Object.values(state);
  let totalPrice = 0;

  pricePanel.innerHTML = "";

  for (let i=0; i< ingredientStatus.length; i++) {
    if (ingredientStatus[i]) {
      pricePanel.innerHTML += `<li>$${ingredientsValues[i].price} ${ingredientsValues[i].name}</li>`
      totalPrice += ingredientsValues[i].price;
      cheesePizzaPrice.innerText = `$${totalPrice} chesse pizza`;
      finalPrice.innerText = `$${totalPrice}`;
    }
  };
};

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener('click',() => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener('click',() => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
