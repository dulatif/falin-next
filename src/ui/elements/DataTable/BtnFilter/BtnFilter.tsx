import { Button, ButtonProps } from "@mui/material";
import { FunnelSimple } from "phosphor-react";
import React from "react";

const BtnFilter: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      color="inherit"
      variant="outlined"
      startIcon={<FunnelSimple size={20} />}
      {...props}
    >
      필터
    </Button>
  );
};

export default BtnFilter;
