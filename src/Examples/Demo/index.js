import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  TextField,
  RadioButtonGroup,
  Toggle,
  CheckBox,
  Select,
} from '../../FormComponents/MaterialUI/FormBindings/ReduxForm';

import Form from '../../FormComponents/SemanticUI/FormBindings/ReduxForm/Form';
import { 
  styles
} from './styles';
import {
  genderOptions,
  countryOptions,
  tShirtOptions,
} from './mock';

import {
  validationConfig
} from './validation';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.formWrapperStyle}> 
      <Form
        {...this.props}
        fieldsValidationConfig={validationConfig}
      > 
        <TextField
          name="name"
          label="Name"
          {...styles}
        />
        <TextField
          name="email"
          label="Email Address"
          {...styles}
        />
        <RadioButtonGroup 
          name="tshirtSize"
          label="T-shirt Size"
          options={tShirtOptions}
          {...styles}            
        />
        <Toggle 
          name="toggle"
          label="Include Special surprise?"
          {...styles}
        />
        <CheckBox 
          name="acceptTerms"
          label="I accept the terms and conditions"
          {...styles}
        />
        <Select
          name="country"
          options={countryOptions}
          {...styles}
        />
        <div>
          <button>
            Submit
          </button>
        </div>
      </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'demo',
})(App);
