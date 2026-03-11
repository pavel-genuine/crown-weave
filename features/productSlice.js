import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    latestJob: [],
    categoryList: [
        { id: 1, name: "Category-1", value: "category-1", isChecked: false, },
        { id: 2, name: "Category-2", value: "category-2", isChecked: false, },
        { id: 3, name: "Category-3", value: "category-1-3", isChecked: false, }
    ],
    colorList: [
        { id: 1, name: "Color-1", value: "black", isChecked: false, },
        { id: 2, name: "Color-2", value: "blue", isChecked: false, },
        { id: 3, name: "Color-3", value: "gray", isChecked: false, },
        { id: 4, name: "Color-4", value: "green", isChecked: false, },
        { id: 5, name: "Color-5", value: "red", isChecked: false, }
    ],
    brandList: [
        { id: 1, name: "Size-1", value: "adidas", isChecked: false, },
        { id: 2, name: "Size-2", value: "balenciaga", isChecked: false, },
        { id: 3, name: "Size-3", value: "balmain", isChecked: false, },
        { id: 4, name: "Size-4", value: "burberry", isChecked: false, },
        { id: 5, name: "Size-5", value: "chloe", isChecked: false, }
    ]
}

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        clearCategoryToggle: (state) => {
            state?.categoryList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        categoryCheck: (state, { payload }) => {
            state?.categoryList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },

        clearColorToggle: (state) => {
            state?.colorList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        colorCheck: (state, { payload }) => {
            state?.colorList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },
        clearBrandToggle: (state) => {
            state?.brandList?.map((item) => {
                item.isChecked = false
                return {
                    ...item,
                }
            })
        },
        brandCheck: (state, { payload }) => {
            state?.brandList?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false
                    } else {
                        item.isChecked = true
                    }
                }
                return {
                    ...item,
                }
            })
        },

    },
})

export const {
    clearCategoryToggle,
    categoryCheck,
    clearColorToggle,
    colorCheck,
    clearBrandToggle,
    brandCheck,
} = jobSlice.actions
export default jobSlice.reducer
