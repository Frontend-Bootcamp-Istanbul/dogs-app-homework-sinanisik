import React from 'react';
import dogs from '../constants/dogsdata';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import classes from './DogDetail.module.css';



const DogDetail = (props) => {
    const selectedDogId = props.match.params.id;
    const selectedDog = dogs.find(dog => dog.id === selectedDogId);
    return (
        <div className={classes.Card}>
            <Card>
                <CardImg className={classes.CardImg} src={selectedDog.image} alt={selectedDog.image} />
                <CardBody>
                    <CardTitle className={classes.Title}><strong>{selectedDog.name}</strong></CardTitle>
                    <CardSubtitle><strong>Breed:</strong>  {selectedDog.breed}</CardSubtitle>
                    <CardSubtitle><strong>Age:</strong>  {selectedDog.age}</CardSubtitle>
                    <CardText><strong>Description:</strong> {selectedDog.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default DogDetail;