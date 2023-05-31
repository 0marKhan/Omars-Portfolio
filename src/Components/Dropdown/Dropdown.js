import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled } from "@mui/material/styles";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: "#fff",
  "& .MuiListItemIcon-root": {
    color: "#fff",
  },
  "&:hover": {
    backgroundColor: "#303636", // Updated color when hovering
    color: theme.palette.primary.contrastText,
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          width: 250,
          backgroundColor: "#1b1c1e",
          fontFamily: "Roboto Slab, serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          color: "#757576",
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {[
            { text: "Skills", icon: <CodeIcon /> },
            { text: "Projects", icon: <WorkIcon /> },
            { text: "About", icon: <InfoIcon /> },
            { text: "Contact", icon: <PhoneIcon /> },
          ].map((item, index) => (
            <CustomListItemButton key={item.text} disablePadding>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </CustomListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>
          <MenuIcon style={{ color: "white" }} />
        </Button>
        {list("right")}
      </React.Fragment>
    </div>
  );
}
