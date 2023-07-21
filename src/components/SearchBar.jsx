import css from '../components/style modules/SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const { onSearch } = props
   const [id, setId ] = useState('')
   
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
      <div>
         <input 
         className={css.input} 
         type='text' 
         placeholder='Search character...' 
         onChange= {handleChange} />
         value={id}
         onKeyUp={handlerEnter}

         <button className={css.button} onClick={()=> onSearch(id)}>Add</button>
      </div>
   );
}
