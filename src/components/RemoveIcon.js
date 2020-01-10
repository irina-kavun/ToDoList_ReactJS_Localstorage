import React from 'react';
import T from 'prop-types';

import {iconsConfig} from '../iconsConfig';

export const RemoveIcon = ({ name, ...props }) => {
  const IconC = iconsConfig[name];

    return <IconC {...props} />
};

RemoveIcon.propTypes = {
  name: T.string.isRequired,
  size: T.string,
  color: T.string,
};

RemoveIcon.defaultProps = {
    size: '14px',
    color: '#000',
};