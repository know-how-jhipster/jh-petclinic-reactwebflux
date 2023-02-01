import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITypes } from 'app/shared/model/types.model';
import { getEntities as getTypes } from 'app/entities/types/types.reducer';
import { IOwners } from 'app/shared/model/owners.model';
import { getEntities as getOwners } from 'app/entities/owners/owners.reducer';
import { IPets } from 'app/shared/model/pets.model';
import { getEntity, updateEntity, createEntity, reset } from './pets.reducer';

export const PetsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const types = useAppSelector(state => state.types.entities);
  const owners = useAppSelector(state => state.owners.entities);
  const petsEntity = useAppSelector(state => state.pets.entity);
  const loading = useAppSelector(state => state.pets.loading);
  const updating = useAppSelector(state => state.pets.updating);
  const updateSuccess = useAppSelector(state => state.pets.updateSuccess);

  const handleClose = () => {
    navigate('/pets');
  };

  useEffect(() => {
    if (!isNew) {
      dispatch(getEntity(id));
    }

    dispatch(getTypes({}));
    dispatch(getOwners({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...petsEntity,
      ...values,
      type: types.find(it => it.id.toString() === values.type.toString()),
      owner: owners.find(it => it.id.toString() === values.owner.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...petsEntity,
          type: petsEntity?.type?.id,
          owner: petsEntity?.owner?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="petclinicApp.pets.home.createOrEditLabel" data-cy="PetsCreateUpdateHeading">
            <Translate contentKey="petclinicApp.pets.home.createOrEditLabel">Create or edit a Pets</Translate>
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
                  id="pets-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('petclinicApp.pets.name')}
                id="pets-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  maxLength: { value: 32, message: translate('entity.validation.maxlength', { max: 32 }) },
                }}
              />
              <ValidatedField
                label={translate('petclinicApp.pets.birthdate')}
                id="pets-birthdate"
                name="birthdate"
                data-cy="birthdate"
                type="date"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField id="pets-type" name="type" data-cy="type" label={translate('petclinicApp.pets.type')} type="select">
                <option value="" key="0" />
                {types
                  ? types.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField id="pets-owner" name="owner" data-cy="owner" label={translate('petclinicApp.pets.owner')} type="select">
                <option value="" key="0" />
                {owners
                  ? owners.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/pets" replace color="info">
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

export default PetsUpdate;
