import React, { Fragment } from 'react';
import { addons, types } from '@storybook/addons';

import { ADDON_ID, BACKGROUND, GRID } from './constants';
import { BackgroundSelector } from './containers/BackgroundSelector';
import { GridSelector } from './containers/GridSelector';

addons.register(ADDON_ID, api => {
  addons.add(BACKGROUND, {
    title: 'Backgrounds',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => (
      <Fragment>
        <BackgroundSelector api={api} />
        <GridSelector />
      </Fragment>
    ),
  });
});
