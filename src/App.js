import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App() {
   const [characters, setCharacters] = useState([])

   const [ access, setAccess ] = useState(false)

   const username = 't.ivani381@gmail.com'
   const password = '123456'

   const location = useLocation()
   const navigate = useNavigate()

   const login = (userData) => {
      if(userData.username === username && userData.password === password){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         const characterFind = characters.find((char) => char.id === Number(id))

         if(characterFind) {
            alert('Already in the list!')
         }
         else if(data.id !== undefined) {
            setCharacters([...characters, data])
         }
      }); 
   }
   
 
   function onClose(id) {
      setCharacters(
         characters.filter((character)=> {
            return character.id!== Number(id);
         })
      )
   }


   return (
      <div className='App'>  

         {
            location.pathname !== '/' && <Nav onSearch= {onSearch} />
         }
         
         
         <Routes>

            <Route
               path='/'
               element = { <Form login={login}/> }
            
            />

            <Route 
               path='/home'
               element={ <Cards characters={characters} onClose={onClose} />}
                        
            />

            <Route 
               path='/about' 
               element={ <About/>} 
            />

            <Route
               path='/detail/:id'
               element={ <Detail/>}
            />

            <Route 
               path='/favorites'
               element= { <Favorites/>}
            />

         </Routes>

      </div>
   );
}

export default App;