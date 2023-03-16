import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { orderTypes } from "../helpers/util";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
interface IOrderSelectProps {
  orderType: string;
  setOrderType: any;
}

export const TypeSelect = ({ orderType, setOrderType }: IOrderSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setOrderType(event.target.value);
  };

  const handleClear = () => {
    setOrderType("");
  };
  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth size="small">
        <InputLabel>Order Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orderType}
          label="OrderType"
          onChange={handleChange}
          endAdornment={
            <IconButton onClick={handleClear} >
              <ClearIcon sx={{ fontSize: 15 }}/>
            </IconButton>
          }
          IconComponent={() => null}
        >
          {orderTypes.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
