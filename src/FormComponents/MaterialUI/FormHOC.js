import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

export default (Form) => (compose(
  connect((state, props) => ({ 
    form: props.name,
    validate: props.formValidator,
    fieldsValidationConfig: props.fieldsValidationConfig,
  })), 
  reduxForm({ 
    destroyOnUnmount: false, 
    asyncBlurFields: []
  }))(Form));