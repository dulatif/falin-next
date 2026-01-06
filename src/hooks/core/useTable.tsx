import { MenuItem, Select, Stack, Typography } from "@mui/material";
import {
  MRT_ColumnDef,
  MRT_RowData,
  MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";
import { Pagination } from "@/ui/components";

interface UseTableProps<TData extends MRT_RowData>
  extends Omit<MRT_TableOptions<TData>, "columns"> {
  columns: MRT_ColumnDef<TData>[];
}

const useTable = <TData extends MRT_RowData>(props: UseTableProps<TData>) => {
  const { columns } = props;
  const table = useMaterialReactTable<TData>({
    enableRowSelection: true, //enable some features
    ...props,
    columns,
    localization: {
      select: "",
      actions: "행위",
    },
    enableColumnOrdering: false, //enable a feature for all columns
    enableGlobalFilter: false, //turn off a feature
    enableSelectAll: false,
    enableColumnFilters: false,
    enableHiding: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableColumnActions: false,
    enableSorting: false,
    paginationDisplayMode: "pages",
    enableRowActions: true,
    positionActionsColumn: "last",
    renderBottomToolbar: ({ table }) => {
      return (
        <Stack
          direction="row"
          justifyContent={"space-between"}
          spacing={2}
          p={4}
        >
          <Pagination
            onNext={table.nextPage}
            onPrev={table.previousPage}
            page={table.getState().pagination.pageIndex + 1}
            onChange={table.setPageIndex}
            total={table.getPageCount()}
          />
          <Stack direction="row" alignItems={"center"}>
            <Typography fontWeight={"semiBold"} mr={4}>
              표시하다 :
            </Typography>
            <Select
              sx={{ width: "70px" }}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              value={table.getState().pagination.pageSize}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </Stack>
        </Stack>
      );
    },
  });
  return table;
};

export default useTable;
