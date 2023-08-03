import { useContext } from 'react';
import { StyledProductList } from './style';
import ProductCard from './ProductCard';
import { UserContext } from '../../provides/UserContext';
import { IProducts } from '../../provides/@types';

const ProductList = () => {

  const { products } = useContext(UserContext);
  const { search } = useContext(UserContext);

  const searchProducts = products.filter((produto) => search === ""
      ? true
      : produto.name.toLowerCase().includes(search.toLowerCase()) ||
          produto.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <StyledProductList>
      {searchProducts.map((product: IProducts) => (
        <ProductCard
          key={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
          id={product.id}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
