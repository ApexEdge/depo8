import { mockRatings } from './mockData';

export interface Rating {
  id: string;
  rating: number;
  created_at: string;
  comment?: string;
}

interface ApiResponse<T> {
  data: T;
  error?: string;
}

const IS_DEV = import.meta.env.DEV;
const API_BASE_URL = IS_DEV 
  ? 'http://localhost:3000'
  : 'https://ratings-api-rouge.vercel.app';

export async function fetchRatings(): Promise<ApiResponse<Rating[]>> {
  // Use mock data in development
  if (IS_DEV) {
    return {
      data: mockRatings
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/ratings`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API Error:', error);
    // Return mock data as fallback even in production
    return {
      data: mockRatings,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export async function createRating(rating: Omit<Rating, 'id' | 'created_at'>): Promise<ApiResponse<Rating>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API Error:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
