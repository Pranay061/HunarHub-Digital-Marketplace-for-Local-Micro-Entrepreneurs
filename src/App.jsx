import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Marketplace from "./components/Marketplace"
import Testimonials from "./components/Testimonials"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import Auth from "./components/Auth"
import Cart from "./components/Cart"
import MyOrders from "./components/MyOrders"
import AccountSettings from "./components/AccountSettings"
import MyProducts from "./components/MyProducts"
import AddProduct from "./components/AddProduct"
import Wishlist from "./components/Wishlist"
import SellerDashboard from "./components/SellerDashboard"
import Dashboard from "./components/Dashboard"

function App() {

  return (
    <>

      
      <Navbar />

      <Hero />

      <Categories />

      <Marketplace />
      <Cart />
      <Wishlist />
      <MyOrders />
      <AddProduct />
      <SellerDashboard />
      <Dashboard />
      <MyProducts />
      <AccountSettings />

      <Stats />

      <Testimonials />

      <Auth />
      

      <Footer />
      

    </>
  )
}

export default App