import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/AuthContext";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
