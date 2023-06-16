import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import JobList from "./pages/JobList";
import AddJop from "./pages/AddJop";
import Header from "./componentes/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add-job" element={<AddJop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
