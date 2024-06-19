import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SignIn from "./pages/Auth/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaksi from "./pages/Dashboard/Transaksi";
import Artikel from "./pages/Dashboard/Artikel";
import AddArtikel from "./pages/Dashboard/AddArtikel";
import DetailEditArtikel from "./pages/Dashboard/ArtikelDetail";
import DataUser from "./pages/Dashboard/DataUsers";
import Keluar from "./pages/Dashboard/Keluar";
import Monitoring from "./pages/Dashboard/Monitoring";
import Produk from "./pages/Dashboard/Produk";
import ProdukEditdetail from "./pages/Dashboard/ProdukEditdetail";
import Promo from "./pages/Dashboard/Promo";
import Tambak from "./pages/Dashboard/Tambak";
import Chat from "./pages/Dashboard/Chat";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/add-artikel" element={<AddArtikel />} />
          <Route path="/artikel/detail/:id" element={<DetailEditArtikel />} />
          <Route path="/data-user" element={<DataUser />} />
          <Route path="/keluar" element={<Keluar />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/produk/detail/:id" element={<ProdukEditdetail />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/tambak" element={<Tambak />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
