import axios from 'axios';

// Use environment variables for API URL
const API_URL = import.meta.env.PROD 
  ? import.meta.env.VITE_API_URL || '/api' // Production API URL from env or default to /api
  : 'http://localhost:5000/api';           // Development API URL

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth services
export const authService = {
  register: (userData: { name: string; email: string; password: string }) =>
    api.post('/auth/register', userData),
  login: (userData: { email: string; password: string }) =>
    api.post('/auth/login', userData),
  getProfile: () => api.get('/auth/profile'),
};

// Case services
export const caseService = {
  getCases: () => api.get('/cases'),
  getCaseById: (id: string) => api.get(`/cases/${id}`),
  createCase: (caseData: any) => api.post('/cases', caseData),
  updateCase: (id: string, caseData: any) => api.put(`/cases/${id}`, caseData),
  deleteCase: (id: string) => api.delete(`/cases/${id}`),
};

export default api;