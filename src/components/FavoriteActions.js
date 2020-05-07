import React, { Component } from 'react';
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite, showStatus } from '../redux/actions';


const FavoriteActions = (props) => {

        let isDisabled = props.loadingId === props.id ? true : false;

        const currDog = props.favorites.find(fav => fav.dogId === props.id);
        return (
            <div style={{ marginTop: "5px" }}>

                {
                    currDog ?
                        <Button disabled={isDisabled} color="danger" onClick={() => {
                            props.deleteFavorite(currDog.id, props.id)
                        }}>Favorilerden Cikar</Button>
                        : <Button disabled={isDisabled} color="primary" onClick={() => {
                            props.addFavorite(props.id)
                        }}>Favoriye Ekle</Button>
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