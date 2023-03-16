import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks/hooks";

export const NavBar = () => {
  const user = useAppSelector((state) => state.user.name);
  console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Orders
          </Typography>
          <Typography sx={{ mr: 1 }}> {user}</Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
