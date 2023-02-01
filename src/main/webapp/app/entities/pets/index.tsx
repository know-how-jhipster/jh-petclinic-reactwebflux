import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Pets from './pets';
import PetsDetail from './pets-detail';
import PetsUpdate from './pets-update';
import PetsDeleteDialog from './pets-delete-dialog';

const PetsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Pets />} />
    <Route path="new" element={<PetsUpdate />} />
    <Route path=":id">
      <Route index element={<PetsDetail />} />
      <Route path="edit" element={<PetsUpdate />} />
      <Route path="delete" element={<PetsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default PetsRoutes;
