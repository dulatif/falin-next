import { Input, InputAdornment, InputProps } from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";

const InputSearch: React.FC<InputProps> = (props) => {
  return (
    <Input
      sx={{ width: "auto" }}
      placeholder="검색 메뉴 ..."
      startAdornment={
        <InputAdornment position="start">
          <MagnifyingGlass size={20} />
        </InputAdornment>
      }
      {...props}
    />
  );
};

export default InputSearch;
