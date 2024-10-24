import { createSlice } from "@reduxjs/toolkit";

export type GroupKeyType = "family" | "order" | "genus";

export type NutritionsType = {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
};

export type FruitType = {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: NutritionsType;
  quantity?: number;
};

export type FruitsStateType = {
  fruits: FruitType[] | null;
  jar: FruitType[];
  calories: number;
  isSecondView: boolean;
  selectedGroup: string;
};

const initialState: FruitsStateType = {
  fruits: null,
  jar: [],
  calories: 0,
  isSecondView: true,
  selectedGroup: "none",
};

const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    setFruits: (state, action) => {
      state.fruits = action.payload;
    },
    setIsSecondView: (state, action) => {
      state.isSecondView = action.payload;
    },
    setSelectedGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },

    // Jar functions
    addToJar: (state, action) => {
      // Instead of adding new item in [], I am checking it here
      const items = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      items.forEach((item) => {
        // If the item exists, we add a quantity prop and update its amount
        const existingItem = state.jar.find((fruit) => fruit.id === item.id);

        if (existingItem) {
          existingItem.quantity = existingItem.quantity
            ? existingItem.quantity + 1
            : 2;
        } else {
          state.jar.push(item);
        }

        // I simply add the calories for each item I add to the jar
        state.calories += item.nutritions.calories;
      });
    },
  },
});

// Export actions and reducer
export const fruitsActions = fruitsSlice.actions;
export default fruitsSlice.reducer;
