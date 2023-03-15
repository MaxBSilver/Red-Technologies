import { useMemo, useState } from "react";
import { useOrders } from "../api/getOrders";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { OrderToolbar } from "./Toolbar";
import { deleteOrders } from "../api/deleteOrders";
import { buildColumnDefinitions, getOrderTypeFilters } from "./helper";

export const OrderGrid = () => {
  // Component State
  const [orders, setOrders] = useState([]);
  const [selectedOrders, setselectedOrders] = useState<GridRowSelectionModel>(
    []
  );

  // Hook for fetching orders
  const getOrders = useOrders(setOrders);
  // Column declarations for Datagrid
  const columns: GridColDef[] = useMemo(() => {
    // Create orderType dropdown filter options
    const filters = getOrderTypeFilters(orders);
    return buildColumnDefinitions(filters);
  }, [orders]);

  const handleDelete = async () => {
    await deleteOrders(selectedOrders);
    getOrders.refetch();
  };

  return (
    <DataGrid
      rows={orders}
      columns={columns}
      getRowId={(row) => row.orderId}
      slots={{ toolbar: OrderToolbar }}
      slotProps={{ toolbar: { handleDelete } }}
      checkboxSelection
      autoHeight
      onRowSelectionModelChange={(row) => {
        setselectedOrders(row);
      }}
      rowSelectionModel={selectedOrders}
    />
  );
};
