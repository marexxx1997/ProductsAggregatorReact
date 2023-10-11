import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Candidate } from "../components/CandidateGrid";

export interface CandidatesState {
    candidates: Array<Candidate>
}

const initialState: CandidatesState = {
    candidates: []
}

const candidatesSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {
        receivedCandidates(state, action: PayloadAction<Candidate[]>) {
            const candidates = action.payload;
            state.candidates = candidates
        }
    }
});

export const {receivedCandidates} = candidatesSlice.actions;
export default candidatesSlice.reducer;