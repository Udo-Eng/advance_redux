import { uiActions } from "./ui-slice";
import {cartActions} from './cart-slice';


export const fetchCartData = () => {

    return async (dispatch) =>{

    
     const fetchData = async () => {

        const response = await fetch(
          "https://react-app-cart-default-rtdb.firebaseio.com/cart.json"
        );

          if (!response.ok) {
            throw new Error("couldn't fetch cart data!");
          }


        const data = await response.json();

      
        return data;
     }


        try{
         
            const cartData = await fetchData();

              dispatch(
                cartActions.replaceCart({
                  items: cartData.items || [],
                  totalQuantity: cartData.totalQuantity,
                })
              );
            

        }catch(err){
                 dispatch(
                   uiActions.showNotification({
                     status: "error",
                     title: "Error!",
                     message: err.message ,
                   })
                 );
        }

      
        
    }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {

      const  response = await fetch("https://react-app-cart-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
        }),
      });

      if (!response.ok) {
        throw new Error(" Sending cart data failed!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sucess!",
          message: "Sent cart data sucessfully!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
