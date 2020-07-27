const initialState = {
  ingredients: { salad: 0, cheese: 0, bacon: 0, meat: 0 },
  totalPrice: 0,
  purchasing: false,
  ingredientsNames: {
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    bacon: "Гахайн мах",
    salad: "Салад",
  },
};

const INGREDIENTS_PRICE = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENTS") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ortsNer],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENTS") {
    const newPrice = state.totalPrice - INGREDIENTS_PRICE[action.ortsNer];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 0,
    };
  }
  return state;
};

export default reducer;
