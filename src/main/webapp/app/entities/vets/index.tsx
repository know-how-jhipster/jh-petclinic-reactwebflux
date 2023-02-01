import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Vets from './vets';
import VetsDetail from './vets-detail';
import VetsUpdate from './vets-update';
import VetsDeleteDialog from './vets-delete-dialog';

const VetsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Vets />} />
    <Route path="new" element={<VetsUpdate />} />
    <Route path=":id">
      <Route index element={<VetsDetail />} />
      <Route path="edit" element={<VetsUpdate />} />
      <Route path="delete" element={<VetsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default VetsRoutes;
