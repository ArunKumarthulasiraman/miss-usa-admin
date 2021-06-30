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
  autoFocus?: boolean;
  label: string;
  type?: string;
  onChange: any;
  error: string;
}

const TextField = (props: Props) => {
  const { name, value, placeholder, autoFocus, label, type, onChange, error } =
    props;

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
            edge="end"
            color="secondary"
          >
            {fieldType === "text" ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      );
    }
  };

  return (
    <>
      <FormControl variant="standard" size="small">
        <StyledInputLabel htmlFor={name} color="secondary" shrink={true}>
          {label}
        </StyledInputLabel>
        <StyledInput
          autoComplete="off"
          autoFocus={autoFocus}
          fullWidth={true}
          color="secondary"
          id={name}
          name={name}
          type={fieldType}
          value={values}
          onChange={handleChange}
          placeholder={placeholder}
          endAdornment={suffixElement()}
        />
      </FormControl>
      {!!error && <HelperText>{error}</HelperText>}
    </>
  );
};

export default TextField;

// styled
const StyledInputLabel = styled(InputLabel)`
  && {
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
const StyledInput = styled(Input)`
  && {
    width: 280px;
    color: white;
    box-sizing: border-box;
    padding-top: 5px;
    &::before {
      color: white;
      border-bottom-color: white;
    }
    &::after {
      border-bottom-color: white;
    }
  }
`;

const HelperText = styled.div`
  ::before {
    display: inline;
    content: "⚠ ";
  }
  color: "black";
  font-size: small;
  font-weight: bold;
`;
