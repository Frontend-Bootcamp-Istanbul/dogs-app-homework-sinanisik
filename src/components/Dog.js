import React from 'react';
import FavoriteActions from "./FavoriteActions";
import { Link, Switch } from "react-router-dom";
import classes from './Dog.module.css';
import { Container, Row, Col } from 'reactstrap';


const Dog = ({ id, name, toggle, getStatus, loadingId, image }) => {
    return <div className={classes.DogItem}>
        <div className={classes.DogImg}>
            <img src={image} className={classes.Image} />
            <div className={classes.Middle}>
                <div className={classes.Text}>Click my name to learn more!</div>
            </div>
        </div>

        <div className={classes.Title}>
            <Link to={`/detail/${id}`}>
                {name}
            </Link>

            <FavoriteActions
                toggle={toggle}
                id={id}
                getStatus={getStatus}
                loadingId={loadingId}
            />
        </div>

    </div>
};

export default Dog;

/**
 *
 *   return <li key={id} style={{
        margin: "15px"
    }}>
                            <span style={{
                                display: "inline-block",
                                marginRight: "15px"
                            }}>
                                {name}
                            </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus}/>
    </li>
 */