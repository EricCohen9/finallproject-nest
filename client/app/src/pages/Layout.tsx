import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Home from "./Home";
import Sidebar from "../components/Sidebar";
import MainStayleDiv from "../style/MainStayleDiv";
const Layout = () => {
  return (
    <MainStayleDiv flexDirection='column' minHeight= '100vh' width= '100vw'>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </MainStayleDiv>
  );
};

export default Layout;