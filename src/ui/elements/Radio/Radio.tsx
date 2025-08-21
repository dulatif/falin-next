import React, { useId, useState } from "react"
import Image from "next/image"
import CheckedIcon from "@/assets/forms/radio-checked.svg"
import HoverIcon from "@/assets/forms/radio-hover.svg"
import UncheckIcon from "@/assets/forms/radio-uncheck.svg"
import { Box, FormControlLabel, Radio as MuiRadio, FormControlLabelProps } from "@mui/material"
import { getStyles, styles } from "./Radio.styles"

export interface IRadioProps extends Omit<FormControlLabelProps, keyof { control: any }> {
  align?: "center" | "top"
}
const Radio: React.FC<IRadioProps> = React.forwardRef(({ align, ...props }, ref) => {
  const id = useId()
  const [icon, setIcon] = useState(UncheckIcon)
  const controlLabelSx = getStyles(align)

  return (
    <Box data-testid="radio-label" id={id} sx={styles.box}>
      <FormControlLabel
        {...props}
        ref={ref}
        sx={controlLabelSx}
        onMouseOver={() => !props.disabled && setIcon(HoverIcon)}
        onMouseLeave={() => setIcon(UncheckIcon)}
        control={
          <MuiRadio
            sx={styles.radio}
            icon={<Image style={{ position: "absolute" }} src={icon} alt="radio" width={24} height={24} />}
            checkedIcon={<Image style={{ position: "absolute" }} src={CheckedIcon} alt="radio checked" width={24} height={24} />}
          />
        }
      />
    </Box>
  )
})

Radio.displayName = "Radio"
export default Radio
