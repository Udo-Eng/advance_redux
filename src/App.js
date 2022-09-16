import {useEffect,Fragment}from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from "./store/cart-actions";




let isInitial = true ;

function App() {
// useSelector   set up a subcription to the store 
  const showCart = useSelector((state) => state.ui.isCartVisible);
  const  cart = useSelector((state) => state.cart);
  const  notification = useSelector((state) => state.ui.notification)
  const  dispatch = useDispatch();



  useEffect(()=>{
     dispatch(fetchCartData());
  },[dispatch])

  //Function setup to perform asynchronous task
  useEffect(() =>{

   if(isInitial){
     isInitial = false ;
     return;
   }
   if(cart.changed){
     dispatch(sendCartData(cart));
   }
     
  },[cart,dispatch]);



  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
