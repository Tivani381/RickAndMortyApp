import Card from '../components/Card';
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
`

function Cards(props) {
   const { characters , onClose } = props;
   return (
      <Container>
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
      </Container>
   )
}

export default Cards