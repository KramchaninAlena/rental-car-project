// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const BASE_URL =  "https://65bb782d52189914b5bc3e4b.mockapi.io/api"

// export const serviceAdverts = createAsyncThunk(
//   'adverts/serviceAll',
//   async ({ page, limit }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(`${BASE_URL}/filter?page=${page}&limit=${limit}`);
//       return data;
//     } catch (error) {
//         rejectWithValue(error);
//     }
//   }
// );