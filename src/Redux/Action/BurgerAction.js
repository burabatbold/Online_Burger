export const addIngredient = (ortsNer) => {
  return {
    type: "ADD_INGREDIENTS",
    ortsNer,
  };
};

export const RemoveIngredient = (ortsNer) => {
  return {
    type: "REMOVE_INGREDIENTS",
    ortsNer,
  };
};
