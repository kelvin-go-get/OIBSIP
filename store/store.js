<<<<<<< HEAD
=======
//manages shopping cart; enables easy add and remove or clear items from cart
>>>>>>> 11c8edc9dd8ac1a8163bec0d56faccd193272507
import create from "zustand";

export const useStore = create((set) => ({
  //cart
  cart: {
    pizzas: [],
  },

  //add pizza in cart
  addPizza: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data],
      },
    })),

  //remove pizza
  removePizza: (index) =>
    set((state) => ({
      cart: {
        pizzas: state.cart.pizzas.filter((_, i) => i !== index),
      },
    })),
    resetCart: ()=> 
    set(()=>({
      cart: {
        pizzas: []
      }
    }))
}));
