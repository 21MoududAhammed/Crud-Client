import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Insert from "./components/Insert";
import Display from "./components/Display";
import Update from "./components/Update";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Insert />} /> {/* Default child route */}
        <Route path="/display" element={<Display />} />
        <Route path="/update/:id" element={<Update />} />
      </Route>
    </Routes>
  );
}
