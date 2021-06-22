import React, { useState } from "react";
import {
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import styled from "styled-components";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  label: string;
  type?: string;
  onChange: any;
}

const TextField = (props: Props) => {
  const { name, value, placeholder, label, type, onChange } = props;
  //   console.log(props);

  const [fieldType, setType] = useState<string>(type || "text");
  const [values, setValues] = useState<string>(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !!onChange && onChange(event);
    setValues(event.target.value);
  };

  const toggleType = () => {
    setType((prev) => (prev === "text" ? "password" : "text"));
  };

  const suffixElement = () => {
    if (type?.toLocaleLowerCase() === "password") {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={toggleType}
          >
            {fieldType === "text" ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      );
    }
  };

  return (
    <FormControl>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledInput
        autoComplete="off"
        id={name}
        name={name}
        type={fieldType}
        value={values}
        onChange={handleChange}
        placeholder={placeholder}
        endAdornment={suffixElement()}
      />
    </FormControl>
  );
};

export default TextField;

// styled
const StyledInput = styled(Input)`
  .MuiInputBase-input {
    color: white;
  }
`;
