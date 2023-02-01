package org.ujar.jh.petclinic.reactwebflux.service.mapper;

import org.mapstruct.*;
import org.ujar.jh.petclinic.reactwebflux.domain.Vets;
import org.ujar.jh.petclinic.reactwebflux.service.dto.VetsDTO;

/**
 * Mapper for the entity {@link Vets} and its DTO {@link VetsDTO}.
 */
@Mapper(componentModel = "spring")
public interface VetsMapper extends EntityMapper<VetsDTO, Vets> {}
