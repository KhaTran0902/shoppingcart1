import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppConText = createContext({});
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  /** */
  const [show, setShow] = useState(false);

  const getData = async () => {
    const url = `https://6468b37e60c8cb9a2cafc05c.mockapi.io/Products1`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, [cart]);
  return (
    <div>
      <AppConText.Provider
        value={{ show, products, addToCart, cart, handleShow, handleClose }}
      >
        {children}
      </AppConText.Provider>
    </div>
  );
};
