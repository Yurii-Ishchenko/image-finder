import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchImages } from '../../server-api/image-api';

export const fetchimagesOperation = createAsyncThunk(
  'images/fetchImagesStatus',
  async ({ searchValue, page }, { rejectWithValue }) => {
    try {
      const response = await fetchImages(searchValue, page);
      if (response.data.hits.length === 0) {
        toast.error('Sorry, images not found');
      }
      return response.data;
    } catch (error) {
      rejectWithValue(error);
      console.log(error);
    }
  },
);
