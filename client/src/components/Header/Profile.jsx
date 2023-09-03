import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const StyledMenu = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

export default function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setAccount("");
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 3, cursor: "pointer" }}>
          {account}
        </Typography>
        <StyledMenu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleClose();
              handleLogout();
            }}
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </StyledMenu>
      </Box>
    </>
  );
}
