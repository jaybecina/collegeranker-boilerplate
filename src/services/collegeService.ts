import axiosInstance from "../axios/axiosInstance";

export const getAllColleges = async (paramUrl: string) => {
  return await axiosInstance.get(paramUrl);
};
