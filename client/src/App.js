import { Box } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/AuthContext";
import DetailView from "./components/prodetail/DetailView";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<DetailView />}></Route>
          </Routes>
        </Box>
      </Router>
    </DataProvider>
  );
}

export default App;
