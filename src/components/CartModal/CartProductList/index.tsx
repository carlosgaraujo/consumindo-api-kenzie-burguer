import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../provides/CartContext';

const CartProductList = () => {
  const { cart, totalMoney, removeAll } = useContext(CartContext)

  return (
    <StyledCartProductList>
      <ul>
        {cart.map((item) => (
          <CartProductCard key={item.id}
            name={item.name}
            img={item.img}
            id={item.id} category={item.category} price={item.price} />
        ))}
      </ul>
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{totalMoney.toFixed(2)}</StyledParagraph>
      </div>
      <StyledButton onClick={() => removeAll()} $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
}

export default CartProductList;
