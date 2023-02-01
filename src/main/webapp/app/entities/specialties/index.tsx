import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Specialties from './specialties';
import SpecialtiesDetail from './specialties-detail';
import SpecialtiesUpdate from './specialties-update';
import SpecialtiesDeleteDialog from './specialties-delete-dialog';

const SpecialtiesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Specialties />} />
    <Route path="new" element={<SpecialtiesUpdate />} />
    <Route path=":id">
      <Route index element={<SpecialtiesDetail />} />
      <Route path="edit" element={<SpecialtiesUpdate />} />
      <Route path="delete" element={<SpecialtiesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SpecialtiesRoutes;
