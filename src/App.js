import logo from "./logo.svg";
import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Banner from "./components/shared/Banner";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
