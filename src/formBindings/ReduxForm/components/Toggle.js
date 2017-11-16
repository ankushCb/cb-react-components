import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Toggle from '../fields/Toggle.js';

const InputToggle = (props) => {
  return (
    <Field
      {...props}
      component={Toggle}
    />
  );
}

export default InputToggle;