// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Shop from './Pages/Shop';
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/banner_mens.png';
// import women_banner from './Components/Assets/banner_women.png';
// import kid_banner from './Components/Assets/banner_kids.png';
// import CartItems from './Components/CartItems/CartItems';
// import ProductDisplay from './Components/ProductDisplay/ProductDisplay'

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Shop />} />
//           <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
//           <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
//           <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
//           <Route path='/product' element={<Product />}>
//             <Route path=':productId' element={<Product />} />
//           </Route>
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/login' element={<LoginSignup />} />
//           <Route path="/cart" component={CartItems} />
//           <Route path="/product/:id" component={ProductDisplay} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import CartItems from './Components/CartItems/CartItems';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import ProfilePage from './Components/Profile/ProfilePage';
import Wishlist from './Components/Wishlist/Wishlist'; // Import the Wishlist component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/product/:productId" element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


