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
  //   console.log(props);
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          placeholder={placeholder}
        />
      )}
      name={name}
      rules={rules}
      defaultValue=""
      {...otherProps}
    />
  );
};

export default FormTextField;
