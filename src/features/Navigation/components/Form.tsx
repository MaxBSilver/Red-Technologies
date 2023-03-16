import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { login } from "../../../store/reducer/userSlice";

interface IFormProps {
  onClose: () => void;
}

type FormValues = {
  name: string;
};

export const Form = ({ onClose }: IFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormValues> = ({ name }) => {
    dispatch(login(name));
    onClose();
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h5">Login</Typography>
      <TextField
        type="text"
        fullWidth
        variant="outlined"
        autoFocus
        label="Name"
        placeholder="Name"
        {...register("name", { required: true, maxLength: 80 })}
        error={!!errors.name}
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};
