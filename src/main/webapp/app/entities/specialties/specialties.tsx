import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISpecialties } from 'app/shared/model/specialties.model';
import { getEntities } from './specialties.reducer';

export const Specialties = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const specialtiesList = useAppSelector(state => state.specialties.entities);
  const loading = useAppSelector(state => state.specialties.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="specialties-heading" data-cy="SpecialtiesHeading">
        <Translate contentKey="petclinicApp.specialties.home.title">Specialties</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="petclinicApp.specialties.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/specialties/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="petclinicApp.specialties.home.createLabel">Create new Specialties</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {specialtiesList && specialtiesList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="petclinicApp.specialties.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="petclinicApp.specialties.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="petclinicApp.specialties.vet">Vet</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {specialtiesList.map((specialties, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/specialties/${specialties.id}`} color="link" size="sm">
                      {specialties.id}
                    </Button>
                  </td>
                  <td>{specialties.name}</td>
                  <td>
                    {specialties.vets
                      ? specialties.vets.map((val, j) => (
                          <span key={j}>
                            <Link to={`/vets/${val.id}`}>{val.id}</Link>
                            {j === specialties.vets.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/specialties/${specialties.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/specialties/${specialties.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/specialties/${specialties.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="petclinicApp.specialties.home.notFound">No Specialties found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Specialties;
