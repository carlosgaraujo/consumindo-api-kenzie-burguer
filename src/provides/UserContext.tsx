import { toast } from "react-toastify";
/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserContext, IDefaultProviderProps, IUser, IRegisterFormValues, ILoginValues, IProducts } from './@types';
import { api } from '../services/api';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserProvider({ children }: IDefaultProviderProps) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  const [products, setProducts] = useState<IProducts[]>([]);

  const [search, setSearch] = useState("");

  const tokenUser = localStorage.getItem("@TOKEN")

  async function userLoad() {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      try {
        const response = await api.get('/users');
        setUser(response.data.user);
        navigate('/');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('@TOKEN');
      }
    }
  }
  useEffect(() => {
    userLoad();
  }, []);

  async function userRegister(formData: IRegisterFormValues) {
    try {
      setLoading(true);
      await api.post('/users', formData);
      toast('usuarios criado com sucesso');
      navigate('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(formData: ILoginValues) {
    try {
      setLoading(true);
      const response = await api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      toast('login realizado com sucesso');
      navigate('/ShopPage');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    try {
      setUser(null);
      localStorage.removeItem('@TOKEN');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  /* PRODUCTS  */

  async function showProducts(): Promise<void> {
    try {
      const token = localStorage.getItem('@TOKEN');
      const response = await api.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    showProducts();
  }, []);





  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
        products,
        setProducts,
        showProducts,
        tokenUser,
        search,
        setSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
