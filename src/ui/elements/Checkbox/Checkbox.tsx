import React, { useId, useState } from "react"
import Image from "next/image"
import CheckedIcon from "@/assets/forms/checkbox-checked.svg"
import HoverIcon from "@/assets/forms/checkbox-hover.svg"
import UncheckIcon from "@/assets/forms/checkbox-uncheck.svg"
import { Box, FormControlLabel, Checkbox as MuiCheckbox, FormControlLabelProps } from "@mui/material"
import { styles } from "./Checkbox.styles"

export interface ICheckboxProps extends Omit<FormControlLabelProps, keyof { control: any }> {
  align?: "center" | "top"
}
const Checkbox: React.FC<ICheckboxProps> = React.forwardRef(({ align, ...props }, ref) => {
  const id = useId()
  const [icon, setIcon] = useState(UncheckIcon)
  const controlLabelSx = {
    alignItems: align === "center" ? "center" : "flex-start",
    "& span.MuiCheckbox-root": {
      marginTop: align === "center" ? "0px" : "4px",
    },
    ...styles.label,
  }

  const handleMouseOver = () => !props.disabled && setIcon(HoverIcon)
  const handleMouseLeave = () => setIcon(UncheckIcon)
  return (
    <Box data-testid="checkbox-label" id={id} sx={styles.box}>
      <FormControlLabel
        {...props}
        ref={ref}
        sx={controlLabelSx}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        control={
          <MuiCheckbox
            sx={styles.checkbox}
            icon={<Image style={{ position: "absolute" }} src={icon} alt="checkbox" width={24} height={24} />}
            checkedIcon={<Image style={{ position: "absolute" }} src={CheckedIcon} alt="checkbox checked" width={24} height={24} />}
          />
        }
      />
    </Box>
  )
})

Checkbox.displayName = "Checkbox"
export default Checkbox
