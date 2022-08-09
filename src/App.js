import './App.css';
import MainPage from "./pages/MainPage";
import CustomNavbar from "./components/CustomNavbar";
import {Container} from "react-bootstrap";

function App() {
  return (
      <Container>
          <CustomNavbar/>
          <MainPage />
      </Container>
  );
}

export default App;
