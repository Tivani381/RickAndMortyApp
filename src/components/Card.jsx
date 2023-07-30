import css from '../components/style modules/Card.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/actions'
import {useEffect, useState} from 'react';

function Card({id, name, species, gender, image, onClose, deleteFavorite, addFavorite, myFavorites}) {
   const [ isFav, setIsFav ] = useState(false)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         deleteFavorite(id)
      }
      else {
         setIsFav(true)
         addFavorite({id, name, species, gender, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (        
      <div className={css.divCard}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            )
            :
            (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={css.btn} onClick={() => {onClose(id)}}>X</button>
         <Link to={`/detail/${id}`}> 
         <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='{name}' />
      </div>
   );
}

const mapStateToProps = (state)=> {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character)=> dispatch(addFavorite(character)),
      deleteFavorite: (id)=> dispatch((deleteFavorite(id)))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)