import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Types from './types';
import TypesDetail from './types-detail';
import TypesUpdate from './types-update';
import TypesDeleteDialog from './types-delete-dialog';

const TypesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Types />} />
    <Route path="new" element={<TypesUpdate />} />
    <Route path=":id">
      <Route index element={<TypesDetail />} />
      <Route path="edit" element={<TypesUpdate />} />
      <Route path="delete" element={<TypesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default TypesRoutes;
