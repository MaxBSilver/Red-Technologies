import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { ToolbarButton } from "./ToolbarButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddModal } from "./AddModal";

interface IToolbarProps {
  handleDelete: () => {}, 
  handleCreate : () => {}
}

export const Toolbar = ({ handleDelete, handleCreate }: IToolbarProps) => {
  return (
    <Stack spacing={2} direction="row" sx={{ padding: 1 }}>
      <GridToolbarQuickFilter />
      <AddModal handleCreate={handleCreate} />
      <ToolbarButton
        Icon={DeleteIcon}
        text={"Delete Selected"}
        handleClick={handleDelete}
      />
    </Stack>
  );
};
