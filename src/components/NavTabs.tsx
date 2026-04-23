import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavTabs() {
  const location = useLocation();
  const navigate = useNavigate();

  let tabValue: number | false;
  if (location.pathname === "/about") tabValue = 0;
  else if (location.pathname === "/counters") tabValue = 1;
  else if (location.pathname === "/") tabValue = false; //or 3??? 
  else tabValue = -1;

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) navigate("/about");
    if (newValue === 1) navigate("/counters");
  };

  if (tabValue === -1) return null;

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab label="О нас" />
        <Tab label="Счетчики" />
      </Tabs>
    </Box>
  );
}