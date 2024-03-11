import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    individuaOrOrganizationButton: "individual", // individual or organization
}

const IndividualOrOrganizationButtonSlice = createSlice({
    name: "individualOrOrganizationButtonSlice",
    initialState,
    reducers: {
        setIndividualOrOrganizationButton: (state, action) => {
            state.individuaOrOrganizationButton = action.payload;
        },
    },
});

export const { setIndividualOrOrganizationButton } = IndividualOrOrganizationButtonSlice.actions;
export default IndividualOrOrganizationButtonSlice.reducer;