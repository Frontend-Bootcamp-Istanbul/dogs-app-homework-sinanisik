import React from 'react';
import dogs from '../constants/dogsdata';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



const DogDetail = (props) => {
    const selectedDogId = props.match.params.dogId;
    const selectedDog = dogs.filter(dog => dog.id === selectedDogId)[0];
    return (
        <div>
            <Card style={{width:"400px", height:"200px"}}>
                <CardImg src={selectedDog.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Name: {selectedDog.name}</CardTitle>
                    <CardSubtitle>Breed: {selectedDog.breed}</CardSubtitle>
                    <CardSubtitle>Age: {selectedDog.age}</CardSubtitle>
                    <CardText>{selectedDog.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default DogDetail;