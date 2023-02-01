package org.ujar.jh.petclinic.reactwebflux.service.mapper;

import org.mapstruct.*;
import org.ujar.jh.petclinic.reactwebflux.domain.Pets;
import org.ujar.jh.petclinic.reactwebflux.domain.Visits;
import org.ujar.jh.petclinic.reactwebflux.service.dto.PetsDTO;
import org.ujar.jh.petclinic.reactwebflux.service.dto.VisitsDTO;

/**
 * Mapper for the entity {@link Visits} and its DTO {@link VisitsDTO}.
 */
@Mapper(componentModel = "spring")
public interface VisitsMapper extends EntityMapper<VisitsDTO, Visits> {
    @Mapping(target = "pet", source = "pet", qualifiedByName = "petsId")
    VisitsDTO toDto(Visits s);

    @Named("petsId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    PetsDTO toDtoPetsId(Pets pets);
}