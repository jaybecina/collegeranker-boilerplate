import axios from "axios";

const rootAPIURL = "http://universities.hipolabs.com";

const axiosInstance = axios.create({
  baseURL: rootAPIURL, // Replace with your API base URL,
  // withCredentials: true,
  // withXSRFToken: true,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    // const accessToken = JSON.parse(localStorage.getItem("token"));

    if (config.headers) {
      // config.headers.Authorization = `Bearer ${accessToken}`;
      // config.headers["X-Requested-With"] = "XMLHTTPRequest";
      config.headers.Accept = "application/json";
    }

    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default axiosInstance;
