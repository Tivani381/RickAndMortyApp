import { connect } from 'react-redux';
import Card from '../Cards';
import css from '../Favorites/Favorites.module.css';
import { useDispatch } from "react-redux"
import { order, filter } from "../../redux/actions"

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch()

  const handleOrder = (evento)=> {
    dispatch(order(evento.target.value))
  }

  const handleFilter = (evento)=> {
    dispatch(filter(evento.target.value))
  }

  return (
    <>
      <h2 className={css.fav}>My Favorites</h2>

      <div>

        <select onChange={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          {
            ['Male', 'Female', 'Genderless', 'unknown'].map((gender, index)=> {
              return (
                <option 
                key = {index}
                value={gender}
                > 
                  {gender} 
                </option>
              )
            })
          }
          {/* <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option> */}
        </select>

      </div>

      {
        myFavorites.length === 0 ? (
          <h3 className={css.empty}>Empty favorites list!</h3>
        ) :
        (
          <Card characters={myFavorites} />

        )
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
