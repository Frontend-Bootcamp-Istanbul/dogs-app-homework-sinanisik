import React from 'react';
import dogs from '../constants/dogsdata';
import { Button } from "reactstrap";
import Dog from "../components/Dog";
import axios from "axios";
import { Switch, Route } from 'react-router';
import DogDetail from './DogDetail';
import classes from './Homepage.module.css';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import {fetchData} from '../redux/actions';



const apiHost = "https://5ea568682d86f00016b45ba7.mockapi.io/";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (this.props.loadingFavorites) {
            return <div>
                <h1>Sayfa Yukleniyor.....</h1>
            </div>
        }
        return (
            <div className={classes.Container}>
                {
                    dogs.map((dog) => {
                        return <Dog
                            key={dog.id}
                            id={dog.id}
                            {...dog}
                        />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favoriteReducer,
        loadingFavorites: state.statusReducer.loadingFavorites
    }
}

const mapDispatchToProps = {
    fetchData: fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);