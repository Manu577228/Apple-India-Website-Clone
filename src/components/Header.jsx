import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Search from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import { appleLogo, navData } from "./Constant";
import styled from "@emotion/styled";

const Component = styled(Box)({
  backgroundColor: "#f5f5f7",
  height: 44,
});

const NavBar = styled(Box)({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  flexWrap: "wrap",

  "& > *": {
    color: "rgba(0, 0, 0, 0.8)",
    fontWeight: 600,
    opacity: 0.7,
    padding: "0 21px",
    fontSize: 12,
  },

  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "10px",
  },
});

function Header() {
  return (
    <Component>
      <NavBar>
        <img src={appleLogo} alt="logo" style={{ width: 15 }} />
        {navData.map((nav) => (
          <Typography>{nav}</Typography>
        ))}
        <Search fontSize="small" />
        <WorkOutlineOutlinedIcon fontSize="small" />
      </NavBar>
    </Component>
  );
}

export default Header;
