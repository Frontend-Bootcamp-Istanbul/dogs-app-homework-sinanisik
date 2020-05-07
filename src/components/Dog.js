import React from 'react';
import FavoriteActions from "./FavoriteActions";
import { Link, Switch } from "react-router-dom";
import classes from './Dog.module.css';
import { Container, Row, Col } from 'reactstrap';


const Dog = ({ id, name, image }) => {
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
                id={id}
            />
        </div>

    </div>
};

export default Dog;
