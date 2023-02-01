package org.ujar.jh.petclinic.reactwebflux.repository;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.ujar.jh.petclinic.reactwebflux.domain.Authority;

/**
 * Spring Data R2DBC repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends R2dbcRepository<Authority, String> {}
