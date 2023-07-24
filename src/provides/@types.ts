export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IProtecRouter {
  user: IUser;
  tokenUser: string | null;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
}
export interface ILoginValues {
  email: string;
  password: string;
}
export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginValues) => Promise<void>;
  userLogout: () => void;
  showProducts: () => void;
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  products: IProducts[];
  tokenUser: string | null;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

/* CART */

export interface ICart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ICartContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  cart: ICart[];
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
  addCart: (product: IProducts) => void;
  removeCart: (id: number) => void;
  removeAll(): void;
  totalMoney: number;
}
