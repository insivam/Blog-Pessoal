import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/static/navbar/Navbar";
import Footer from "./components/static/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Temas from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroUsuario from "./pages/cadastro-usuario/CadastroUsuario";
import DeletarTema from "./components/temas/deletarTema/DeleterTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import NotFoundPage from "./pages/pageNotFound/PageNotFound";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
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
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
