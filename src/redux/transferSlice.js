import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  transfers: [],
  isLoading: true,
};

export const getAllTransfers = createAsyncThunk(`transfers`, async () => {
  const response = await axios.get(
    `https://acb-api.algoritmika.org/api/transaction`
  );
  return response.data;
});

export const deleteTransferInfo = createAsyncThunk(
  `delete transfer`,
  async (transferId) => {
    const response = await axios.delete(
      `https://acb-api.algoritmika.org/api/transaction/${transferId}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const addTransfer = createAsyncThunk(
  `add transfer`,
  async (newTransfer) => {
    const response = await axios.post(
      `https://acb-api.algoritmika.org/api/transaction/`,
      newTransfer
    );
    return response.data;
  }
);

export const editTransfer = createAsyncThunk(
  "edit transfer",
  async (editedTransfer) => {
    console.log(editedTransfer);
    const response = await axios.put(
      `https://acb-api.algoritmika.org/api/transaction/${editedTransfer.id}`,
      editedTransfer
    );
    console.log(response.data);
    return response.data;
  }
);

const transferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    //http isteyi olmasa burda yaziriq
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTransfers.fulfilled, (state, action) => {
      state.transfers = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllTransfers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTransfers.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTransferInfo.fulfilled, (state, action) => {
      state.transfers = action.payload;
    });
    builder.addCase(addTransfer.fulfilled, (state, action) => {
      state.transfers = [ action.payload,...state.transfers];
    });
    builder.addCase(editTransfer.fulfilled, (state, action) => {
      console.log(state.transfers)
      state.transfers = state.transfers.filter((transfer)=>transfer.id !== action.payload.id)
      state.transfers = [ action.payload,...state.transfers];
    });
  },
});

export const {} = transferSlice.actions;

export default transferSlice.reducer;
