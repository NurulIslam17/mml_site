import "./App.css";
import Home from "./page/Home";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Register from "./page/Register";
import Dashboard from "./page/Admin/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollUpButton from "./components/ScrollUpButton";
import User from "./page/Admin/User";
import Cost from "./page/Admin/Cost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<User />} />
            <Route path="cost" element={<Cost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollUpButton />
      </BrowserRouter>
    </>
  );
}

export default App;
