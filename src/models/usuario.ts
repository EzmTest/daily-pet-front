import { AbstractModel } from './abstract-model';

export class Usuario extends AbstractModel {

    public nome: string;
    public email: string;
    public senha: string;
    public estado: string;
    public cidade: string;
    public bairro: string;
    public rua: string;
    public numero: number;
    public complemento: number;

}