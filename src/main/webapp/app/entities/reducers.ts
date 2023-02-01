import vets from 'app/entities/vets/vets.reducer';
import specialties from 'app/entities/specialties/specialties.reducer';
import types from 'app/entities/types/types.reducer';
import owners from 'app/entities/owners/owners.reducer';
import pets from 'app/entities/pets/pets.reducer';
import visits from 'app/entities/visits/visits.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  vets,
  specialties,
  types,
  owners,
  pets,
  visits,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
