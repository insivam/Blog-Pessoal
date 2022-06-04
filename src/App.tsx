import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/static/navbar/Navbar";
import Footer from "./components/static/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Temas from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroUsuario from "./pages/cadastro-usuario/CadastroUsuario";
import "./App.css";
import DeletarTema from "./components/temas/deletarTema/DeleterTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {/* // Antigo Switch */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/forumularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
