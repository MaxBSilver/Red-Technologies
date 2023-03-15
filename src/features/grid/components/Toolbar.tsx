import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
export const Toolbar = () => {
  return (
    <Stack spacing={2} direction="row" sx={{ padding: 1 }}>
      <GridToolbarQuickFilter />
      <Button variant="contained" sx={{ height: 32 }}>
        <AddIcon sx={{ fontSize: 20 }} /> Create Order
      </Button>
      <Button variant="contained" sx={{ height: 32 }}>
        <DeleteIcon sx={{ fontSize: 20 }} />
        Delete Selected
      </Button>
    </Stack>
  );
};
