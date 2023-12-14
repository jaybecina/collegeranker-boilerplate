export interface ICollege {
  name: string;
  country: string;
  state_province: string | null;
  alpha_two_code: string;
  web_pages: string[];
  domains: string[];
}

export interface ICollegeData {
  colleges: ICollege[] | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  selectedCollege: string;
}

export interface IActionSlice {
  payload: any;
  type: string;
}
