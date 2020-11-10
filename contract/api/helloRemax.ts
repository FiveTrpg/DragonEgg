import Axios from 'axios';
import { validate } from 'class-validator';
import { IHelloRemax, WhoamiReqDTO, WhoamiResDTO } from '../dto/helloRemax';
import { BaseApi } from './baseApiSdk';

export class HelloRemax extends BaseApi implements IHelloRemax {

    async whoami (data: WhoamiReqDTO): Promise<WhoamiResDTO> {
        await validate(new WhoamiReqDTO(data));
        const result = await this._call('/hello-remax/whoami', data);
        const ResDTO: WhoamiResDTO = new WhoamiResDTO(result);
        await validate(ResDTO);
        return ResDTO;
    }

}