//import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "./components/Main/Form.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <h1>Journal</h1>
      </Header>
      <Main></Main>
      <Footer />
    </>
  );
}

export default App;
