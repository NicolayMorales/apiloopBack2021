import {inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Aeropuerto, AeropuertoRelations, Ruta} from '../models';

export class AeropuertoRepository extends DefaultCrudRepository<
  Aeropuerto,
  typeof Aeropuerto.prototype.id,
  AeropuertoRelations
> {
  public readonly destino_aeropuerto: BelongsToAccessor<Ruta, typeof Aeropuerto.prototype.id>;
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Aeropuerto, dataSource);
  }
}
