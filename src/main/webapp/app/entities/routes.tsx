import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Vets from './vets';
import Specialties from './specialties';
import Types from './types';
import Owners from './owners';
import Pets from './pets';
import Visits from './visits';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="vets/*" element={<Vets />} />
        <Route path="specialties/*" element={<Specialties />} />
        <Route path="types/*" element={<Types />} />
        <Route path="owners/*" element={<Owners />} />
        <Route path="pets/*" element={<Pets />} />
        <Route path="visits/*" element={<Visits />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
