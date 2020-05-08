import React from 'react';
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite, showStatus } from '../redux/actions';


const FavoriteActions = (props) => {

        const currentDog = props.favorites.find(fav => fav.dogId === props.id);
        return (
            <div>
                {
                    currentDog ?
                        <Button disabled={props.loadingId === props.id} color="danger" onClick={() => {
                            props.deleteFavorite(currentDog.id, props.id)
                        }}>Remove Favorites</Button>
                        : <Button disabled={props.loadingId === props.id} color="primary" onClick={() => {
                            props.addFavorite(props.id)
                        }}>Add Favorites</Button>
                }
            </div>
        );
}


const mapStateToProps = state => {
    return {
        favorites: state.favoriteReducer,
        loadingId: state.statusReducer.loadingId
    }
}

const mapDispatchToProps = {
    addFavorite: addFavorite,
    deleteFavorite: deleteFavorite,
    showStatus: showStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);