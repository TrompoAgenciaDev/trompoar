// App.jsx
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/fonts/index.css";
import AppRoutes from "@/routes/AppRoutes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuPopup from "@/components/popups/MenuPopup";
import useTogglePopup from '@/hooks/useTogglePopup';
import cursor from '/trompo.gif';
import CustomCursor from "./components/CustomCursor";
import { HoverProvider } from "./context/HoverContext";

function App() {
  const { isOpen, togglePopup } = useTogglePopup();


  return (
    <BrowserRouter basename="/">
      <HoverProvider>
        <Header onTogglePopup={togglePopup} />
        <MenuPopup isOpen={isOpen} onClose={togglePopup} />
        <AppRoutes />
        <Footer />
        <CustomCursor icon={cursor}/>
      </HoverProvider>
    </BrowserRouter>
  );
}

export default App;
