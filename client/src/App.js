import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Box>
        <Home />
      </Box>
    </>
  );
}

export default App;
