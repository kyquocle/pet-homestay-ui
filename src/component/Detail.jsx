import axios from "axios";
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PetService from "../service/PetService";

const Detail = () => {
    const { petId } = useParams();
    const [pet, setPet] = useState({
      petId: petId,
      petName: "",
      petAttribute: "",
      petRace: ""
    });
    const [updateStatus, setUpdateStatus] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/pet/" + petId)
        .then(response => setPet(response.data))
        .catch(err => console.error(err));
      }, []);
    
    const change = (e) => {
        const value = e.target.value;
        setPet({
         ...pet, [e.target.name]: value
        });
    };

    const updatePet = (e) =>{
      e.preventDefault();
     PetService.updatePetById(pet,petId)
     .then((response) => {
        setUpdateStatus("Hello")
     })
     .catch(err => console.error(err));

    }


    return (
        <>
       
    <label>Pet name</label>
    <input 
    type="text"
    name="petName"
    value={pet.petName}
    onChange={change}
    >

    </input>
    <div>{pet.petAttribute}</div>
    <div>{pet.petRace}</div>
    <button onClick={updatePet}>Submit</button>
    <div>{updateStatus}</div>
    </>
  )
}

export default Detail