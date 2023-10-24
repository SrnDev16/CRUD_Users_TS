import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth={"xl"}>
          <Toolbar>
           
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h6">CRUD</Typography>
            </Link>
            <Link
              to={"/Create"}
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "10px",
              }}
            >
              <Button color="inherit">create</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
