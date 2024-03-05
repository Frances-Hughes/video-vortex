import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      zIndex: 1300,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src="./logo.png" alt="logo" height={100} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
