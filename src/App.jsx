import "./App.css";
import React from "react";
import { Container } from "./Components/Container/Container";
import { Header } from "./Components/Header/Header";
import { TableOfGoods } from "./Components/TableOfGoods/TableOfGoods";
import { Modal } from "./Components/Modal/Modal";
function App() {
  return (
    <Container>
      <Header />
      <TableOfGoods />
      <Modal/>
    </Container>
  );
}

export default App;
