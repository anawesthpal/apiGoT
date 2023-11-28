import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: "https://thronesapi.com/api/v2",
});


// listar
export const listCharacters = createAsyncThunk('list', async () => {
	try {
		const response = await api.get('/Characters');
		return response.data; 
	} catch {
		return null;
	}
});



