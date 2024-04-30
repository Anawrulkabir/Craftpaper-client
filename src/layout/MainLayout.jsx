import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Navbar from '../component_pack/Navbar'
import Hero from '../components/Hero'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      {/* <Nav /> */}

      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default MainLayout
