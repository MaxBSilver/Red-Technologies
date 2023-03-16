import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import { MenuItem, Button, TextField, Typography } from "@mui/material";
import { orderTypes } from "../helpers/util";

interface IFormValues {
  customerName: string;
  orderType: string;
}

interface IFormProps {
  handleCreate: (data: IFormValues) => {};
}

export const Form = ({ handleCreate }: IFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    handleCreate(data);
    reset();
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h5">Create Order</Typography>
      <TextField
        {...register("customerName", {
          required: true,
          min: 1,
          maxLength: 50,
        })}
        fullWidth
        variant="outlined"
        autoFocus
        label="Customer Name"
        error={!!errors.customerName}
      />
      <TextField
        {...register("orderType", { required: true })}
        fullWidth
        select
        defaultValue={orderTypes[0]}
        label="Order Type"
        error={!!errors.orderType}
      >
        {orderTypes.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Button variant="contained">Save as Draft</Button>
    </Box>
  );
};
