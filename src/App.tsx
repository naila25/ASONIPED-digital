import { Outlet } from '@tanstack/react-router';
import NavBar from "./components/Landing/NavBar"
import Footer from "./components/Landing/Footer"


function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

