import axios from 'axios';
import { SortOption } from '../components/SortSelector';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api'
  });
  
  export const fetchCandidates = async (
    searchText: string,
    minFilterPrice: number | null,
    maxFilterPrice: number | null,
    sortOrder?: SortOption
    ) => {
    try {
      const response = await apiClient.get(`/candidates?sort_column=${sortOrder?.column}&sort_direction=${sortOrder?.direction}&search_text=${searchText}&min_price=${minFilterPrice}&max_price=${maxFilterPrice}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  