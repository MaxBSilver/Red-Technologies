import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import { MenuItem, Button, TextField, Typography } from "@mui/material";
import { orderTypes } from "../helpers/util";
import { clearDraft, saveDraft } from "../../../store/reducer/draftSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";

interface IFormValues {
  customerName: string;
  orderType: string;
}

interface IFormProps {
  handleCreate: (data: IFormValues) => {};
  handleClose: () => void;
}

export const Form = ({ handleCreate, handleClose }: IFormProps) => {
  const dispatch = useAppDispatch();
  const draft = useAppSelector((state) => state.draft);
  const { customerName, orderType } = draft;
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    handleCreate(data);
    dispatch(clearDraft());
    reset();
    handleClose();
  };

  const handleSaveDraft = () => {
    const draft = getValues();
    dispatch(saveDraft(draft));
    handleClose();
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
        defaultValue={customerName}
        error={!!errors.customerName}
      />
      <TextField
        {...register("orderType", { required: true })}
        fullWidth
        select
        label="Order Type"
        defaultValue={orderType}
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
      <Button variant="contained" onClick={handleSaveDraft}>
        Save as Draft
      </Button>
    </Box>
  );
};
