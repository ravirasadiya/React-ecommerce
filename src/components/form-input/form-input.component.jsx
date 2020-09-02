import React from 'react';
import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' {...otherProps} onChange={handleChange} />
    {label ? (
      <label
        className={`${
          otherProps.value && otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
