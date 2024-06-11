import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SignIn from "./pages/Auth/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaksi from "./pages/Dashboard/Transaksi";
import Artikel from "./pages/Dashboard/Artikel";
import DataUser from "./pages/Dashboard/DataUsers";
import Keluar from "./pages/Dashboard/Keluar";
import Monitoring from "./pages/Dashboard/Monitoring";
import Produk from "./pages/Dashboard/Produk";
import Promo from "./pages/Dashboard/Promo";
import Tambak from "./pages/Dashboard/Tambak";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/artikel" element={<Artikel />} />     
        <Route path="/data-user" element={<DataUser />} />     
        <Route path="/keluar" element={<Keluar />} />   
        <Route path="/monitoring" element={<Monitoring />} />   
        <Route path="/produk" element={<Produk />} />   
        <Route path="/promo" element={<Promo />} />   
        <Route path="/tambak" element={<Tambak />} />   
      </Routes>
    </Router>
  );
}

export default App;
