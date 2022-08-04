import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addProdToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;

        toast.info("Product Quantity Increased", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);

        toast.success(`${action.payload.title} Added to Cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items = nextCartItems;

      toast.error(`${action.payload.title} Removed from Cart`, {
        position: "bottom-left",
      });

      localStorage.setItem("items", JSON.stringify(state.items));
    },

    decreaseCart(state, action) {
      const itemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
      } else if (state.items[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.items.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.items = nextCartItems;
      }
      state.cartTotalAmount -= state.items[itemIndex].price;

      localStorage.setItem("items", JSON.stringify(state.items));
    },
    increaseCart(state, action) {
      const itemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.items[itemIndex].cartQuantity += 1;
      state.cartTotalAmount += state.items[itemIndex].price;

      localStorage.setItem("items", JSON.stringify(state.items));
    },
    getTotals(state, action) {
      let { total, quantity } = state.items.reduce(
        (cartTotal, item) => {
          const { price, cartQuantity } = item;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addProdToCart,
  removeFromCart,
  decreaseCart,
  getTotals,
  increaseCart,
} = cartSlice.actions;
export default cartSlice;
