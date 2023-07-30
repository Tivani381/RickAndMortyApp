import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import css from '../Detail/Detail.module.css'
// import axios from 'axios'


const Detail =() => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [ character, setCharacter ] = useState({})

    // useEffect(() => {
    //     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    //        if (data.name) {
    //           setCharacter(data);
    //        } else {
    //           window.alert('No hay personajes con ese ID');
    //        }
    //     });
    //     return setCharacter({});
    //  }, [id]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json()) 
        .then ((char) => {
           if (char.name) {
              setCharacter(char);
           } else {
              alert('No hay personajes con ese ID');
           }
        })
        .catch((err)=> {
            alert("No hay personaje con ese ID");
        });
        return setCharacter({});
     }, [id]);

     const handleClick = ()=> {
        navigate('/home')
     }
     
    return (
        <>
        <button onClick={handleClick}>Home</button>
        <h2 className={css.div}>Detail</h2>
        {
            character ? (
                <div className={css.div2}>
                    <h2>Name: {character.name}</h2>
                    <h2>Status: {character.status}</h2>
                    <h2>Specie: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin?.name}</h2>
                <div className={css.imgcont}>
                    <img className={css.img} src={character.image} alt={character.name}/>
                </div>
                </div>
            ) : (
                ''
            )
        }
        </>
    )
}

export default Detail