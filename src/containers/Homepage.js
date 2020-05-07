import React from 'react';
import dogs from '../constants/dogsdata';
import Dog from "../components/Dog";
import classes from './Homepage.module.css';
import { connect } from 'react-redux';
import {fetchData} from '../redux/actions';



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