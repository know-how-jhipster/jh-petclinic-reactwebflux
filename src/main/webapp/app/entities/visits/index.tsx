import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Visits from './visits';
import VisitsDetail from './visits-detail';
import VisitsUpdate from './visits-update';
import VisitsDeleteDialog from './visits-delete-dialog';

const VisitsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Visits />} />
    <Route path="new" element={<VisitsUpdate />} />
    <Route path=":id">
      <Route index element={<VisitsDetail />} />
      <Route path="edit" element={<VisitsUpdate />} />
      <Route path="delete" element={<VisitsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default VisitsRoutes;
