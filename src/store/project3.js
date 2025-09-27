import { create } from "zustand";


const useCartStore = create((set) =>({
    cart:[],
    addToCart: (product) =>
        set((state) => {
            const existing = state.cat.find((item) => item.id ===product.id);
            if
        })
}))