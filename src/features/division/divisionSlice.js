import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchDivision = createAsyncThunk(
  "division/fetchDivision",
  async (id) => {
    const response = await fetch(`${BASE_URI}/divisions/${id}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return { division: data };
  }
);

export const fetchCreateDivision = createAsyncThunk(
  "division/fetchCreateDivision",
  async (division) => {
    console.log(division);
    const response = await fetch(`${BASE_URI}/divisions`, {
      method: 'POST',
      body: JSON.stringify(division),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return { division: data };
  }
);

export const fetchDivisions = createAsyncThunk(
  "division/fetchDivisions",
  async () => {
    const response = await fetch(`${BASE_URI}/divisions`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return { divisions: data };
  }
);

export const divisionSlice = createSlice({
  name: "division",
  initialState: {
    divisions: [],
    currentDivision: {},
    status: "idle",
    errors: {},
  },
  reducers: {},
  extraReducers: {
    [fetchDivisions.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchDivisions.fulfilled]: (state, action) => {
      state.status = "sucecced";
      state.divisions = action.payload.divisions;
    },
    [fetchDivisions.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = action.error.message;
    },
    [fetchDivision.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchDivision.fulfilled]: (state, action) => {
      state.status = "sucecced";
      state.currentDivision = action.payload.division;
    },
    [fetchDivision.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = action.error.message;
    },
  },
});

export default divisionSlice.reducer;
