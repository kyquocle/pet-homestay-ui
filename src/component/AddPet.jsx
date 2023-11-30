import React from "react";
import '../component/AddPet.scss'
import { useState } from "react";
import PetService from "../service/PetService";
import { useNavigate } from "react-router";

const AddPet = () => {

    const navigate = useNavigate()

    const [pet, setPet] = useState({
        petId: "",
        petName: "",
        petAttribute: "",
        petRace: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setPet({...pet, [e.target.name] : value}); // setPet "" to pet.value
    }

    const addPet = (e) => {
        e.preventDefault();
        PetService.addPet(pet).
        then((response) => {
            console.log(response);
            navigate("/petList")

        })
        .catch((err) => {
            console.error(err);
        })
    }

    return (
        <>
            <div className="container">
                    <div className="title">Add new Pet</div>

                    <div>
                        <label className="label">Pet Name</label>
                        <input className="inp" type="text"
                            name="petName"
                            value={pet.petName}
                            onChange={(e) => handleChange(e)}
                        ></input>
                    </div>

                    <div>
                        <label className="label">Pet Attribute</label>
                        <input className="inp"type="text"
                         name="petAttribute"
                         value={pet.petAttribute}
                         onChange={(e) => handleChange(e)}
                         ></input>
                    </div>

                    <div>
                        <label className="label">Pet Race</label>
                        <input className="inp"type="text"
                         name="petRace"
                         value={pet.petRace}
                         onChange={(e) => handleChange(e)}
                         ></input>
                    </div>

                    <button className="button" type="submit" onClick={addPet}>Submit</button>
            </div>
        </>
    )
}

export default AddPet;