import {
  Box,
  Grow,
  IconButton,
  Input,
  InputProps,
  MenuItem,
  Paper,
  SxProps,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretDown, CaretUp } from "phosphor-react";
import React, { useId, useMemo, useState } from "react";
import { getColors } from "@/theme/ts/colors";
import Render from "../../elements/Render/Render";

const styles: {
  input: SxProps;
  icon: SxProps;
  dropdown: { paper: SxProps; box: SxProps };
} = {
  input: { marginTop: "0px !important" },
  icon: {
    position: "absolute",
    fontSize: "20px",
    top: "26px",
    right: "4px",
  },
  dropdown: {
    paper: { position: "absolute", width: "100%", zIndex: 200, top: "68px" },
    box: { padding: "6px 0px" },
  },
};

export interface IOption {
  label: string;
  value: string;
}
export interface ISelectSearchableProps extends Omit<InputProps, "onChange"> {
  options: IOption[];
  onChange?: (val: string) => void;
}
const SelectSearchable: React.FC<ISelectSearchableProps> = React.forwardRef(
  (props, ref) => {
    const theme = useTheme();
    const colors = getColors(theme.palette.mode);
    const id = useId();
    const { options } = props;
    const [finalValue, setFinalValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [displayedOptions, setDisplayedOptions] = useState(options);

    useMemo(() => {
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()),
      );
      setDisplayedOptions(filteredOptions);
    }, [inputValue, options]);

    useMemo(() => {
      if (!showDropdown) {
        setInputValue(finalValue);
      }
    }, [showDropdown, finalValue]);

    const handleClickOption = (option: IOption) => {
      setFinalValue(option.value);
      setShowDropdown(false);
      if (props.onChange) {
        props.onChange(option.value);
      }
    };

    return (
      <Box id={id}>
        <Input
          {...props}
          ref={ref}
          sx={styles.input}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          value={showDropdown ? inputValue : finalValue}
        />
        <IconButton
          disabled={props.disabled}
          onClick={() => setShowDropdown(!showDropdown)}
          sx={{
            ...styles.icon,
            color: props.error ? colors.danger[500] : "initial",
          }}
        >
          <Render in={!showDropdown}>
            <CaretDown weight="bold" />
          </Render>
          <Render in={showDropdown}>
            <CaretUp weight="bold" />
          </Render>
        </IconButton>
        <Grow in={showDropdown}>
          <Paper sx={styles.dropdown.paper} className="select-dropdown">
            <Box sx={styles.dropdown.box}>
              {displayedOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  onClick={() => handleClickOption(option)}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Box>
          </Paper>
        </Grow>
      </Box>
    );
  },
);

SelectSearchable.displayName = "SelectSearchable";
export default SelectSearchable;
