import { Length } from 'class-validator';
import Record from 'dataclass';

export class WhoamiReqDTO extends Record<WhoamiReqDTO>{
    @Length(10, 20)
    fullName: string;
}

export class WhoamiResDTO extends Record<WhoamiResDTO> {
    @Length(5, 15)
    firstName: string;
}

export interface IHelloRemax {
    whoami(body: WhoamiReqDTO): Promise<WhoamiResDTO>;
}