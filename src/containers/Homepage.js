import React from 'react';
import dogs from '../constants/dogsdata';
import { Button } from "reactstrap";
import Dog from "../components/Dog";
import axios from "axios";
import { Switch, Route } from 'react-router';
import DogDetail from './DogDetail';
import classes from './Homepage.module.css';
import { Container, Row, Col } from 'reactstrap';



const apiHost = "https://5ea568682d86f00016b45ba7.mockapi.io/";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            loadingId: null
        }
    }
    componentDidMount() {
        // localstoragedan getirme
        /*        this.setState({
                    favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
                })*/

        this.setState({
            loadingFavorites: true
        }, () => {
            axios.get(`${apiHost}/favorites`).then((result) => {
                this.setState({
                    favorites: result.data,
                    loadingFavorites: false
                })
            }).catch((err) => {
                console.log("Axios err", err);
                this.setState(({
                    loadingFavorites: false
                }))
            })
        })
    }

    toggle = (dogId) => {

        this.setState({ loadingId: dogId })

        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        if (foundDog) {
            axios.delete(`${apiHost}/favorites/${foundDog.id}`).then((result) => {
                this.setState(({
                    favorites: this.state.favorites.filter((dog) => dog.dogId !== dogId),
                    loadingId: null
                }))
            }).catch((err) => {
                console.log(err);
            });
        } else {
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
            axios.post(`${apiHost}/favorites`, { dogId })
                .then((result) => {
                    const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
                    this.setState({
                        favorites: [...this.state.favorites, eklenenFavori],
                        loadingId: null
                    })
                }).catch((err) => {
                    console.log(err);
                })
        }
    }

    getStatus = (dogId) => {
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        return foundDog;
    }

    render() {
        if (this.state.loadingFavorites) {
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
                            toggle={this.toggle}
                            id={dog.id}
                            getStatus={this.getStatus}
                            {...dog}
                            loadingId={this.state.loadingId}
                        />
                    })
                }
            </div>
        );
    }
}

export default Homepage;