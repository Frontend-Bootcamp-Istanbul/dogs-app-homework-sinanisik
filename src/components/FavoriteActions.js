import React from 'react';
import {Button} from "reactstrap";

const FavoriteActions = (props) => {

    let isDisabled;
    props.loadingId === props.id ? isDisabled = true : isDisabled = false;

    return (
        <div style={{marginTop: "5px"}}>
            {
                props.getStatus(props.id) ?
                    <Button disabled={isDisabled} color="danger" onClick={() => {props.toggle(props.id)}}>Favorilerden Cikar</Button>
                    : <Button disabled={isDisabled} color="primary" onClick={() => {props.toggle(props.id)}}>Favoriye Ekle</Button>
            }
        </div>
    );
};

export default FavoriteActions;