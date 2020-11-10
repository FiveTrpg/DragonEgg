import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { validate } from 'class-validator';
import Record from 'dataclass';

export class BaseApi {
    private _axios: AxiosInstance;
    constructor(_axios: AxiosInstance) {
        this.setAxios(_axios);
    }

    setAxios(_axios: AxiosInstance) {
        this._axios = _axios;
    }

    _call<T extends Record<T>>(url: string, data: T): any {
        const result = this._axios.post(url, data);
    }
}