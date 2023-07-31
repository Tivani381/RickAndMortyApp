import Card from '../components/Card';
import css from '../components/style modules/Cards.module.css'

function Cards(props) {
   const { characters , onClose } = props;

if (!Array.isArray(characters)) {
    return null;
  }

   return (
      <div className={css.div}>
         {
            characters.map((character)=> {
               return (
               <Card
               key={character.id}
               id= {character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={onClose}
               />
               )
            })
         }
      </div>
   )
}

export default Cards