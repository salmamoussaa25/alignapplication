import React from 'react';
import FieldInput from './FieldInput';
import PrimaryButton from './PrimaryButton';
import StatusBox from './StatusBox';
import './AuthForm.css';

const AuthForm = ({
  fields,
  values,
  onChange,
  onSubmit,
  submitLabel,
  errorText,
  successText
}) => {
  return (
    <form className="authform_card" onSubmit={onSubmit}>
      <div className="authform_grid">
        {fields.map((field) => (
          <FieldInput
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            value={values[field.id]}
            onChange={(event) => onChange(field.id, event.target.value)}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <StatusBox text={errorText} mode="error" />
      <StatusBox text={successText} mode="success" />
      <PrimaryButton type="submit" label={submitLabel} />
    </form>
  );
};

export default AuthForm;
