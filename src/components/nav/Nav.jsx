import SearchBar from "../SearchBar.jsx"
import css from '../style modules/Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = props => {
    const { onSearch } = props
    return (
        <nav className={css.nav}>
        <img className={css.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/640px-Rick_and_Morty.svg.png' width='280px' alt="LogoRM"/>
            <Link to="/home" className={css.buttonLink} > Home </Link>
            <Link to="/about" className={css.buttonLink}> About </Link>
            <Link to='/favorites' className={css.buttonLink}>Favorites</Link>
        <SearchBar onSearch={onSearch}/>
    </nav>
    )
}

export default Nav