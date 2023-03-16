import { AppBar, Toolbar, Box,  Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks/hooks";
import { UserModal } from "./UserModal";

export const NavBar = () => {
  const user = useAppSelector((state) => state.user.name);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Orders
          </Typography>
          <Typography sx={{ mr: 1 }}> {user}</Typography>
          <UserModal/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
