export interface IDataSourceItem {
  key: string;
  label: React.ReactNode; // ReactNode can be used for JSX elements
  grade: string;
}

export interface IData {
  data: IDataSourceItem[];
  setData: React.Dispatch<React.SetStateAction<IDataSourceItem[]>>;
}
