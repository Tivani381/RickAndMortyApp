import css from '../components/style modules/SearchBar.module.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchBar(props) {
   const { onSearch } = props
   const [id, setId ] = useState('')
   const { pathname } = useLocation()
   
   const handlerEnter = (event) => {
      if (event.key === 'Enter') {
               onSearch(id)
               setId('')
            }
   }

   const handleChange = (evento) => {
      setId(evento.target.value)
   }

   return (
      !pathname.includes('/detail') &&
      !pathname.includes('/about') &&
      !pathname.includes('/favorites') &&
      <div>
         <input 
         className={css.input} 
         type='text' 
         placeholder='Search character...' 
         value={id}
         onKeyUp={handlerEnter}
         onChange= {handleChange} />

         <button className={css.button} onClick={()=> onSearch(id)}>Add</button>
      </div>
   );
}
