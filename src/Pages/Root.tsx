import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Drawerr from "../components/Drawer";
import { Box } from "@mui/material";
const drawerWidth = 240;
const Root = () => {
  return (
    <>
      <Header drawerWidth={drawerWidth} />
      <Drawerr drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
            ml: `${drawerWidth}px`,
          display: "flex",
          mt: "66px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
