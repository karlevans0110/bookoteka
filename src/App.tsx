import { MemoryRouter, Routes, Route } from "react-router-dom";
import Glowna from "./pages/Glowna";

export default function App() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <Routes>
          <Route path="/" element={<Glowna />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}