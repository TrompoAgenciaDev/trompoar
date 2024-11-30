import { BrowserRouter } from "react-router-dom";
import "@as/fonts/index.css";
import AppRoutes from "@/routes/AppRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuPopup from "@/components/popups/MenuPopup";
import useTogglePopup from '@/hooks/useTogglePopup';

function App() {

  const {isOpen, togglePopup} = useTogglePopup();

  return (
    <BrowserRouter basename="/trompoagencia/home">
      <Header onTogglePopup={togglePopup}/>
      <MenuPopup isOpen={isOpen} onClose={togglePopup}/>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
