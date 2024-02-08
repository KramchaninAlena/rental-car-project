import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL =  "https://65bb782d52189914b5bc3e4b.mockapi.io/api"
  

export const fetchCatalog = createAsyncThunk(
    'catalog/fetchAll',
    async ({ page, limit }, { rejectWithValue }) => {
      try {
        const result = await axios.get(`${BASE_URL}/cars?page=${page}&limit=${limit}`);
        return result.data;
        
      } catch (error) {
        rejectWithValue(error);
      }
    }
  );

 

