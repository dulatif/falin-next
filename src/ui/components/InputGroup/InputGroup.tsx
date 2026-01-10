import {
  FormControl,
  FormControlProps,
  FormHelperText,
  Input,
  InputLabel,
  InputProps,
} from "@mui/material";
import React, { PropsWithChildren, useId } from "react";

export interface IInputGroup extends InputProps {
  label: string;
  helperText?: string;
}
const InputGroup: React.FC<IInputGroup> = React.forwardRef((props, ref) => {
  const id = useId();
  const { label, helperText, ...inputProps } = props;
  return (
    <FormControl
      fullWidth
      required={props.required}
      error={props.error}
      disabled={props.disabled}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} {...inputProps} ref={ref} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
});

export interface IFormGroup extends FormControlProps, PropsWithChildren {
  label: string;
  helperText?: string;
}
const FormGroup: React.FC<IFormGroup> = React.forwardRef((props, ref) => {
  const { label, helperText, children, ...formControlProps } = props;
  return (
    <FormControl
      fullWidth
      required={props.required}
      error={props.error}
      disabled={props.disabled}
      ref={ref}
      {...formControlProps}
    >
      <InputLabel>{label}</InputLabel>
      {children}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
});

InputGroup.displayName = "InputGroup";
FormGroup.displayName = "FormGroup";
export { FormGroup };
export default InputGroup;
