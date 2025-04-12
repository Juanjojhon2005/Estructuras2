import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";


const crudRef = collection(db, "items");

export const fetchItems = createAsyncThunk("crud/fetchItems", async () => {
  const snapshot = await getDocs(crudRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
});

export const addItem = createAsyncThunk("crud/addItem", async (newItem) => {
  const docRef = await addDoc(crudRef, newItem);
  return { id: docRef.id, ...newItem };
});

export const deleteItem = createAsyncThunk("crud/deleteItem", async (id) => {
  await deleteDoc(doc(db, "items", id));
  return id;
});

export const updateItem = createAsyncThunk("crud/updateItem", async ({ id, updatedData }) => {
  await updateDoc(doc(db, "items", id), updatedData);
  return { id, updatedData };
});

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = { id: action.payload.id, ...action.payload.updatedData };
        }
      });
  },
});

export default crudSlice.reducer;
