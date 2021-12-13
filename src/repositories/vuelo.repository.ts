import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, Vuelo, VueloRelations} from '../models';
import {RutaRepository} from './ruta.repository';

export class VueloRepository extends DefaultCrudRepository<
  Vuelo,
  typeof Vuelo.prototype.id,
  VueloRelations
> {

  public readonly rutaFk: BelongsToAccessor<Ruta, typeof Vuelo.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('RutaRepository') protected rutaRepositoryGetter: Getter<RutaRepository>,
  ) {
    super(Vuelo, dataSource);
    this.rutaFk = this.createBelongsToAccessorFor('rutaFk', rutaRepositoryGetter,);
    this.registerInclusionResolver('rutaFk', this.rutaFk.inclusionResolver);
  }
}
