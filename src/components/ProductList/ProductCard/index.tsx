import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IProducts } from '../../../provides/@types';
import { CartContext } from '../../../provides/CartContext';

const ProductCard = ({ name, category, price, img, id }: IProducts) => {

  const { addCart } = useContext(CartContext);

  const product = {
    name,
    category,
    price,
    img,
    id
  }


  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>
          R$ {price.toFixed(2)}
        </StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => addCart(product)} >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
