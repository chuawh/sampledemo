import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const getChannelName = (channel) => {
  if (channel?.name && channel?.name !== "Group Channel") {
    return channel.name;
  }
  if (channel?.name === "Group Channel" || !channel?.name) {
    return channel.members.map((member) => member.nickname).join(", ");
  }

  return "NO_NAME_CHANNEL";
};

export default function Header({ channel }) {
  console.warn(channel);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Add your company logo here */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {getChannelName(channel)}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
