import { ToastContainer } from 'react-toastify';
import { CartProvider } from './provides/CartContext';
import { UserProvider } from './provides/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <UserProvider>
    <CartProvider>
      <GlobalStyles />
      <Router />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </CartProvider>
  </UserProvider>
);

export default App;
