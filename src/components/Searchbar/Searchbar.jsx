import { ImSearch } from 'react-icons/im';
import { ImCancelCircle } from 'react-icons/im';

import {
  SearchbarContainer,
  SearchbarForm,
  SearchbarInput,
  SearchbarBtn,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmitSearch, onResetSearch }) => (
  <SearchbarContainer>
    <SearchbarForm
      onSubmit={evt => {
        evt.preventDefault();
        onSubmitSearch(evt.target.input.value);
      }}
    >
      <SearchbarInput
        name="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
      />
      <SearchbarBtn>
        <ImSearch size={16} />
      </SearchbarBtn>
    </SearchbarForm>
    <SearchbarBtn onClick={onResetSearch}>
      <ImCancelCircle size={16} />
    </SearchbarBtn>
  </SearchbarContainer>
);
