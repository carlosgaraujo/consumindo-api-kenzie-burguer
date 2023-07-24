import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../provides/CartContext';
import { ICart } from '../../../../provides/@types';

const CartProductCard = ({ name, img, id}: ICart) => {

  const { removeCart } = useContext(CartContext)

  return (

    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={img} alt='Hamburguer' />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <button type='button' aria-label='Remover' onClick={() => removeCart(id)}>
          <MdDelete size={24} color='red' />
        </button>
      </div>
    </StyledCartProductCard>
  )
}

export default CartProductCard;
