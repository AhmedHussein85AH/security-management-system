import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Create axios instance with credentials
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Register user
export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post('/register', userData);
  return response.data;
};

// Login user
export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  
  if (response.data.token) {
    // Store token in localStorage
    localStorage.setItem('authToken', response.data.token);
  }
  
  return response.data;
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem('authToken');
};

// Get current user profile
export const getCurrentUser = async () => {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    return null;
  }
  
  try {
    const response = await api.get('/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // If token is invalid or expired, clear it
    localStorage.removeItem('authToken');
    return null;
  }
};

// Add auth header to requests
export const authHeader = () => {
  const token = localStorage.getItem('authToken');
  
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
};