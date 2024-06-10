import { FormEvent } from 'react';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { useLocation, useNavigate } from 'react-router-dom';
import quearyString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = quearyString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });


  const onSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);

  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">

          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>

            <input
              type="text"
              name="searchText"
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-success mt-2">
              Seach
            </button>

          </form>

        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr />

          {
            (q!.length < 1 || q === '')
              ? <div className="alert alert-primary animate__animated animate__headShake"> Search a hero </div> 
              : (heroes.length === 0) 
                && <div className="alert alert-danger animate__animated animate__headShake">No hero found with <b>{q}</b></div>
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />

            ))
          }

        </div>

      </div>
    </>
  )
}
