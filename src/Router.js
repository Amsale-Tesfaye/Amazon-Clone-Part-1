import React from 'react'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from "./Pages/Payment/Payment";
import Orders from  './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
  "pk_test_51PJRxNK3xFdcGlAh0wBSbrBPzyjCdAK70daiHGfQjanmi4yQfUegcKGuHIv5kFb72Rgq56rBeMpMZvJYy8BviTIt00nOOX27n1"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payments"
            element={
              <ProtectedRoute msg={"Log in to pay"} redirect={"/payments"}>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute 
              msg={"You must log in to access your orders"} redirect={"/payments"}>

                <Orders />
              </ProtectedRoute>
            }
          />

          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing