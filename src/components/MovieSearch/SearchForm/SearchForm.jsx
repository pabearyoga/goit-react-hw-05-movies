import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from "./SearchForm.module.css"

const SearchForm = ({ value, onChange, onFormSubmit }) => {
  const onSubmitHandle = e => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value;
    
    if (query.trim() === '') {
      toast.warning('Enter search query!');
    }
    onFormSubmit(query);
  };

  return (
    <form className={css.SearchForm} autoComplete="off" onSubmit={onSubmitHandle}>
      <button className={css.SearchForm__button} type="submit">
        Search
      </button>

      <input className={css.SearchForm__input}
        id="searchQuery"
        type="text"
        name="searchQuery"
        value={value}
        placeholder="Search movie"
        onChange={e => onChange(e.target.value)}
        autoFocus
      />
    </form>
  );
};

SearchForm.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}.isRequired;
export default SearchForm;