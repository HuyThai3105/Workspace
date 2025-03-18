import axios, { AxiosError, type AxiosInstance } from 'axios';

export class Http {
  instance: AxiosInstance;
  private accessToken: string | null;
  
  constructor() {
    this.accessToken = this.getAccessTokenFromLocalStorage();
    
    // Initialize axios instance
    this.instance = axios.create({
      baseURL: '/api', // Your API base URL
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // 10 seconds
    });

    // Request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: AxiosError) => {
        // Handle 401 Unauthorized
        if (error.response?.status === 401) {
          // Clear token and redirect to login
          this.clearLocalStorage();
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  private getAccessTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  }

  private clearLocalStorage() {
    localStorage.removeItem('token');
  }
}

const http = new Http().instance;

export default http; 