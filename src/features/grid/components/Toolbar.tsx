import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { ToolbarButton } from "./ToolbarButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
export const OrderToolbar = ({ handleDelete }: any) => {
  return (
    <Stack spacing={2} direction="row" sx={{ padding: 1 }}>
      <GridToolbarQuickFilter />
      <ToolbarButton Icon={AddIcon} text={"Create Order"} />
      <ToolbarButton
        Icon={DeleteIcon}
        text={"Delete Selected"}
        handleClick={handleDelete}
      />
    </Stack>
  );
};
