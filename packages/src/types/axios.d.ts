import axios from 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> {
    code: number;
    msg: string;
    rows: T;
    total: number;
    Message: string;
    IsSuccess: boolean;
    Items: T;
    Count: number;
    other: T;
    ReObj: T;
    FileName: string;
    FilePath: string;
  }
}
