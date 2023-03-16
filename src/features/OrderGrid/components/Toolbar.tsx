import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { ToolbarButton } from "./ToolbarButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddModal } from "./AddModal";
import { TypeSelect } from "./TypeSelect";

interface IToolbarProps {
  handleDelete: () => {};
  handleCreate: () => {};
  orderType: string;
  setOrderType: () => void;
}

export const Toolbar = ({
  handleDelete,
  handleCreate,
  orderType,
  setOrderType,
}: IToolbarProps) => {
  return (
    <Stack spacing={2} direction="row" sx={{ padding: 2 }}>
      <GridToolbarQuickFilter />
      <AddModal handleCreate={handleCreate} />
      <ToolbarButton
        Icon={DeleteIcon}
        text={"Delete Selected"}
        handleClick={handleDelete}
      />
      <TypeSelect orderType={orderType} setOrderType={setOrderType} />
    </Stack>
  );
};
