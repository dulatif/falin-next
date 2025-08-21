import { FormControl, FormHelperText, FormLabel, MenuItem, Select, SelectProps } from "@mui/material"
import React, { useId } from "react"

export interface ISelectGroupProps {
  label: string
  helperText?: string
  options: { label: string; value: string | number | " " }[]
  required?: boolean
  error?: boolean
  disabled?: boolean
  defaultValue?: string | number
  placeholder?: string
}

type SelectGroupProps = ISelectGroupProps & Omit<SelectProps, keyof ISelectGroupProps>

const SelectGroup: React.FC<SelectGroupProps> = React.forwardRef((props, ref) => {
  const id = useId()
  const { label, helperText, options, ...selectProps } = props

  return (
    <FormControl required={props.required} error={props.error} disabled={props.disabled}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select {...selectProps} defaultValue={props.defaultValue || ""} id={id} ref={ref}>
        {props.placeholder && <MenuItem value="">-- {props.placeholder} ---</MenuItem>}
        {options.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
})

SelectGroup.displayName = "SelectGroup"
export default SelectGroup
