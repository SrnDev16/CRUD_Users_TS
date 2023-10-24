import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import UserCreate from "./components/UserCreate";
import UserUpdate from "./components/UserUpdate";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/create" element={<UserCreate/>}/>
        <Route path="/update/:id" element={<UserUpdate/>}/>
      </Routes>
    </>
  );
}

const WrappedApp = () => {
  return <BrowserRouter>
    <App />
  </BrowserRouter>
};

// export default App;
export default WrappedApp;
