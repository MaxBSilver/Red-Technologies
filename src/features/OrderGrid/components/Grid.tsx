import { useMemo, useState } from "react";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { Toolbar } from "./Toolbar";
import { useOrders } from "../api/getOrders";
import { deleteOrders } from "../api/deleteOrders";
import { createOrder } from "../api/createOrder";
import { buildColumnDefinitions, getOrderTypeFilters } from "../helpers/util";
import { IOrder } from "../types/order.type";
import { useAppSelector } from "../../../store/hooks/hooks";

export const Grid = () => {
  // Component State
  const [orders, setOrders] = useState([]);
  const [orderType, setOrderType] = useState("");
  const [selectedOrders, setselectedOrders] = useState<GridRowSelectionModel>(
    []
  );
  const user = useAppSelector((state) => state.user.name);

  // Hook for fetching orders
  const getOrders = useOrders({ setOrders, orderType });

  // Column declarations for Datagrid
  const columns: GridColDef[] = useMemo(() => {
    // Create orderType dropdown filter options
    const filters = getOrderTypeFilters(orders);
    return buildColumnDefinitions(filters);
  }, [orders]);

  // Refetch orders with type param if it's defined
  useMemo(() => {
    getOrders.refetch();
  }, [getOrders]);

  const handleCreate = async (order: IOrder) => {
    await createOrder({ ...order, user });
    getOrders.refetch();
  };

  const handleDelete = async () => {
    await deleteOrders(selectedOrders);
    getOrders.refetch();
  };

  return (
    <>
      <DataGrid
        rows={orders}
        columns={columns}
        getRowId={(row) => row.orderId}
        slots={{ toolbar: Toolbar }}
        slotProps={{
          toolbar: { handleDelete, handleCreate, orderType, setOrderType },
        }}
        checkboxSelection
        autoHeight
        onRowSelectionModelChange={(row) => {
          setselectedOrders(row);
        }}
        rowSelectionModel={selectedOrders}
      />
    </>
  );
};
