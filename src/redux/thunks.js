import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL =  "https://65bb782d52189914b5bc3e4b.mockapi.io/api"
  

export const fetchCatalog = createAsyncThunk(
    'catalog/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const result = await axios.get(`${BASE_URL}/cars`);
        console.log('result', result.data)
        return result.data;
        
      } catch (error) {
        rejectWithValue(error);
      }
    }
  );

 

