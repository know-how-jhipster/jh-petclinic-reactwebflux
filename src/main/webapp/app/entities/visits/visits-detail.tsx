import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './visits.reducer';

export const VisitsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const visitsEntity = useAppSelector(state => state.visits.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="visitsDetailsHeading">
          <Translate contentKey="petclinicApp.visits.detail.title">Visits</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{visitsEntity.id}</dd>
          <dt>
            <span id="visitdate">
              <Translate contentKey="petclinicApp.visits.visitdate">Visitdate</Translate>
            </span>
          </dt>
          <dd>{visitsEntity.visitdate ? <TextFormat value={visitsEntity.visitdate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="petclinicApp.visits.description">Description</Translate>
            </span>
          </dt>
          <dd>{visitsEntity.description}</dd>
          <dt>
            <Translate contentKey="petclinicApp.visits.pet">Pet</Translate>
          </dt>
          <dd>{visitsEntity.pet ? visitsEntity.pet.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/visits" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/visits/${visitsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default VisitsDetail;
