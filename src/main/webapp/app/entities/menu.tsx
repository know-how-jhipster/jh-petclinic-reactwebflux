import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/vets">
        <Translate contentKey="global.menu.entities.vets" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/specialties">
        <Translate contentKey="global.menu.entities.specialties" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/types">
        <Translate contentKey="global.menu.entities.types" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/owners">
        <Translate contentKey="global.menu.entities.owners" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/pets">
        <Translate contentKey="global.menu.entities.pets" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/visits">
        <Translate contentKey="global.menu.entities.visits" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
