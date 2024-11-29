import { BrowserRouter } from "react-router-dom";
import "./styles/fonts/fonts.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
