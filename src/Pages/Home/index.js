import React from 'react'
import AppFooter from "../../Components/AppFooter";
import AppHeader from "../../Components/AppHeader";
// import PageContent from "../../Components/PageContent";
import SideMenu from "../../Components/SideMenu";
import AppRoutes from "../../Components/AppRoutes";
import { Outlet } from 'react-router-dom';




const Home = () => {
  
  return (
    <div>
    <AppHeader />
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <div className="PageContent">
     
      {/*OR <AppRoutes /> */}
      <Outlet />
    
       </div>
    </div>
    <AppFooter />
    </div>
  )
}

export default Home;

