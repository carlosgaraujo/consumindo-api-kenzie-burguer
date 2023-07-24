import { toast } from "react-toastify";
import { createContext, useState } from 'react'
import { ICart, ICartContext, IDefaultProviderProps, IProducts } from './@types';


export const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: IDefaultProviderProps) => {

  const [modal, setModal] = useState<boolean>(false);
  const [cart, setCart] = useState<ICart[]>([]);

  const addCart = (product: IProducts) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
      toast("Adicionado com sucesso!");
    } else {
      toast("Produto já adicionado!");
    }
  };

  const removeCart = (id: number) => {
    const productFiltered = cart.filter((product: ICart) => product.id !== id);
    setCart(productFiltered)
  };

  function removeAll() {
    const remove = cart.slice();
    remove.splice(0, remove.length)
    setCart(remove)
  };

  const totalMoney: number = cart.reduce(
    (accumulator, { price }) => accumulator + price,
    0
  );

  return (
    <CartContext.Provider value={{
      addCart,
      cart,
      setCart,
      modal,
      setModal,
      removeCart,
      removeAll,
      totalMoney
    }}>
      {children}

    </CartContext.Provider>
  )
}
