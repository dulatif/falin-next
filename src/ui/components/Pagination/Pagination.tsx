import { Box, Button, Pagination as MuiPagination } from "@mui/material";
import { CaretLeft, CaretRight } from "phosphor-react";
import React, { useId } from "react";
import classes from "./Pagination.module.scss";

export interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
  page: number;
  onChange: (val: number) => void;
  total: number;
  defaultPage?: number;
}
const Pagination: React.FC<PaginationProps> = ({
  onNext,
  onPrev,
  page,
  total,
  onChange,
  defaultPage = 1,
}) => {
  const id = useId();

  return (
    <Box id={id} className={classes.Container}>
      <Button
        disabled={page === 1}
        variant="text"
        data-shape="icon"
        color="inherit"
        onClick={onPrev}
      >
        <CaretLeft size={18} weight="bold" />
      </Button>
      <MuiPagination
        onChange={(_, page) => onChange(page)}
        count={total}
        shape="rounded"
        page={page}
        defaultPage={defaultPage}
        hideNextButton={true}
        hidePrevButton={true}
      />
      <Button
        disabled={page === total}
        variant="text"
        data-shape="icon"
        color="inherit"
        onClick={onNext}
      >
        <CaretRight size={18} weight="bold" />
      </Button>
    </Box>
  );
};

export default Pagination;
