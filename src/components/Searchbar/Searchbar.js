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
      <SearchbarBtn type="submit">
        <ImSearch size={24} />
      </SearchbarBtn>
      <SearchbarBtn type="button" onClick={onResetSearch}>
        <ImCancelCircle size={24} />
      </SearchbarBtn>
    </SearchbarForm>
  </SearchbarContainer>
);
