import React from "react";
import useStore from "../store/Contexto.jsx";
import resistenciaImage from "../../img/resistencia.jpg";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const CharactersCard = (props) => {

    const navigate = useNavigate();


    const handleNavigateChars = () => {
      navigate(`/characters/${props.id}`);
    }

  const {handleClick} = useStore();
  
  return (
      <Card>
        <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Gender: {props.gender}</Card.Text>
          <Card.Text>Color: {props.eyeColor}</Card.Text>
          <Button variant="primary" onClick={handleNavigateChars} >Learn more!</Button>
          <Button className="botonicono" onClick={()=>handleClick(props, 'character')}>
                <Card.Img className="icono" src={resistenciaImage}/>
            </Button>
        </Card.Body>
      </Card>
  );
};

export default CharactersCard;
