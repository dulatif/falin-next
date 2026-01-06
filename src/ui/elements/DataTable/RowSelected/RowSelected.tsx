import { Button } from "@mui/material";
import { MRT_RowData, MRT_TableInstance } from "material-react-table";
import { X } from "phosphor-react";
import React from "react";
import Render from "../../Render";

const RowSelected: React.FC<{ table: MRT_TableInstance<MRT_RowData> }> = ({
  table,
}) => {
  return (
    <Render in={table.getIsSomeRowsSelected()}>
      <Button
        variant="text"
        endIcon={<X weight="bold" />}
        onClick={() => table.setRowSelection({})}
      >
        {table.getSelectedRowModel().rows?.length} 개 선택됨
      </Button>
    </Render>
  );
};

export default RowSelected;
