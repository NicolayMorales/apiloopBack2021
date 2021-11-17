import {Model, model, property} from '@loopback/repository';

@model()
export class Credenciales extends Model {
  static Usuario(Usuario: any, password: any) {
    throw new Error('Method not implemented.');
  }
  static password(Usuario: any, password: any) {
    throw new Error('Method not implemented.');
  }
  @property({
    type: 'string',
    required: true,
  })
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<Credenciales>) {
    super(data);
  }
}

export interface CredencialesRelations {
  // describe navigational properties here
}

export type CredencialesWithRelations = Credenciales & CredencialesRelations;
