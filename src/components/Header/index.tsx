import { useContext } from 'react';
import { MdShoppingCart, MdLogout } from 'react-icons/md';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../provides/UserContext';
import { CartContext } from '../../provides/CartContext';

const Header = () => {
  const { userLogout } = useContext(UserContext)
  const { modal, setModal } = useContext(CartContext)

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => setModal(true)}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type='button'>
                <MdLogout size={28} onClick={() => userLogout()} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer >
    </StyledHeader >
  )
}

export default Header;
