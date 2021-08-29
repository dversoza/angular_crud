import { Cidade } from './cidade.model';

export class Endereco {
  constructor(
    public id?: number,
    public logradouro?: string,
    public rua?: string,
    public numero?: number,
    public complemento?: string,
    public bairro?: string,
    public cep?: string,
    public cidade?: Cidade,
    public residencial?: boolean
  ) {}
}
