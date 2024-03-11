import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    individuaOrOrganizationButton: "individual", // individual or organization
    selectedFrequency: "monthly", // Default value for selected frequency
    selectedAmount: 3000, // Default value for selected amount
}

const IndividualOrOrganizationButtonSlice = createSlice({
    name: "individualOrOrganizationButtonSlice",
    initialState,
    reducers: {
        setIndividualOrOrganizationButton: (state, action) => {
            state.individuaOrOrganizationButton = action.payload;
        },
        setSelectedFrequency: (state, action) => {
            state.selectedFrequency = action.payload;
        },
        setAmountSelected: (state, action)=>{
            state.selectedAmount = action.payload;
        
        }
    },
});

export const { setIndividualOrOrganizationButton, setSelectedFrequency, setAmountSelected } = IndividualOrOrganizationButtonSlice.actions;
export default IndividualOrOrganizationButtonSlice.reducer;