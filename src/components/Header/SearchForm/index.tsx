import { MdSearch } from 'react-icons/md';
import { useContext, useState } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { UserContext } from '../../../provides/UserContext';

const SearchForm = () => {

  const [searchValue, setSearchValue] = useState("");
  const { setSearch } = useContext(UserContext);

  function submit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  }

  return (
    <StyledSearchForm onSubmit={submit}>
      <input type='text' placeholder='Digitar pesquisa' onChange={(event) => setSearchValue(event.target.value)} />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  )
}

export default SearchForm;
