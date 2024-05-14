import "./App.css";
import React from "react";
import { Container } from "./Components/Container/Container";
import { Header } from "./Components/Header/Header";
import { TableOfGoods } from "./Components/TableOfGoods/TableOfGoods";
function App() {
  return (
    <Container>
      <Header />
      <TableOfGoods />
    </Container>
  );
}

export default App;
