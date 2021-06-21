import React from "react";
import { Controller } from "react-hook-form";
import TextField from "../TextField";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  rules: object;
}

const FormTextField = (props: Props) => {
  const { name, label, placeholder, rules, type, ...otherProps } = props;
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
        />
      )}
      name={name}
      rules={rules}
      {...otherProps}
    />
  );
};

export default FormTextField;
