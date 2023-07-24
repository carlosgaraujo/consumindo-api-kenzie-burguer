/* eslint-disable no-console */
import { useContext, useEffect } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../provides/UserContext';
import { CartContext } from '../../provides/CartContext';

const ShopPage = () => {
  const { showProducts } = useContext(UserContext);
  const { products, setProducts } = useContext(UserContext);

  const { modal, setModal } = useContext(CartContext);  


  useEffect(() => {
    showProducts();
  }, []);

  return (
    <StyledShopPage>
      {modal ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
