import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Owners from './owners';
import OwnersDetail from './owners-detail';
import OwnersUpdate from './owners-update';
import OwnersDeleteDialog from './owners-delete-dialog';

const OwnersRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Owners />} />
    <Route path="new" element={<OwnersUpdate />} />
    <Route path=":id">
      <Route index element={<OwnersDetail />} />
      <Route path="edit" element={<OwnersUpdate />} />
      <Route path="delete" element={<OwnersDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default OwnersRoutes;
