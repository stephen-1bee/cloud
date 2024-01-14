import React from "react";
import {
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your App Name
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h4" component="div" sx={{ mt: 2 }}>
            Welcome to Your Cloud Computing Project
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Edit <code>src/App.js</code> and save to reload.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 3 }}
          >
            Learn React
          </Button>
        </header>
      </Container>
    </div>
  );
}

export default App;
