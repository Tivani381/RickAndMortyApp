import { connect } from 'react-redux'
import Card from '../Card'
import css from '../Favorites/Favorites.module.css'

const Favorites = (myFavorites) => {
    return (
        <>
        <h2 className={css.div}>My Favorites</h2>
            <Card characters = { myFavorites }/>        
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)