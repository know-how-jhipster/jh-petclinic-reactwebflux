import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPets } from 'app/shared/model/pets.model';
import { getEntities as getPets } from 'app/entities/pets/pets.reducer';
import { IVisits } from 'app/shared/model/visits.model';
import { getEntity, updateEntity, createEntity, reset } from './visits.reducer';

export const VisitsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const pets = useAppSelector(state => state.pets.entities);
  const visitsEntity = useAppSelector(state => state.visits.entity);
  const loading = useAppSelector(state => state.visits.loading);
  const updating = useAppSelector(state => state.visits.updating);
  const updateSuccess = useAppSelector(state => state.visits.updateSuccess);

  const handleClose = () => {
    navigate('/visits' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getPets({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.visitdate = convertDateTimeToServer(values.visitdate);

    const entity = {
      ...visitsEntity,
      ...values,
      pet: pets.find(it => it.id.toString() === values.pet.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          visitdate: displayDefaultDateTime(),
        }
      : {
          ...visitsEntity,
          visitdate: convertDateTimeFromServer(visitsEntity.visitdate),
          pet: visitsEntity?.pet?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="petclinicApp.visits.home.createOrEditLabel" data-cy="VisitsCreateUpdateHeading">
            <Translate contentKey="petclinicApp.visits.home.createOrEditLabel">Create or edit a Visits</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="visits-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('petclinicApp.visits.visitdate')}
                id="visits-visitdate"
                name="visitdate"
                data-cy="visitdate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('petclinicApp.visits.description')}
                id="visits-description"
                name="description"
                data-cy="description"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  maxLength: { value: 255, message: translate('entity.validation.maxlength', { max: 255 }) },
                }}
              />
              <ValidatedField id="visits-pet" name="pet" data-cy="pet" label={translate('petclinicApp.visits.pet')} type="select">
                <option value="" key="0" />
                {pets
                  ? pets.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/visits" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default VisitsUpdate;
