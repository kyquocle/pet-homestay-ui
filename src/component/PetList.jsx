import React from 'react'
import '../component/PetList.scss'
import { useState, useEffect } from "react";
import axios from "axios";
import PetService from "../service/PetService.js"

const PetList = () => {
  const [petData, setPetData] = useState(([]))

  const deletePetById = async (petId) => {
    try {
        await PetService.deletePetById(petId);
        setPetData(petData.filter(pet => pet.petId !== petId));
    } catch (error) {
        console.error('Error deleting pet:', error);
    }
}
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/pet')
        setPetData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <>
    <h1 >Pet management</h1>
     <div>
        <div className>
          
            <table>

                <thead>

                  <tr>
                    <th>Pet Id</th>
                    <th>Pet Name</th>
                    <th>Pet Attribute</th>
                    <th>Pet Race</th>
                    <th>Action</th>
                  </tr>
                    
                </thead>

                <tbody>

                  {petData.map((pet) => (
                      <tr key = {pet.petId}>
              
                      <td>{pet.petId}</td>
                      <td>{pet.petName}</td>
                      <td>{pet.petAttribute}</td>
                      <td>{pet.petRace}</td>

                      <td>
                        <a href="/">Update</a>
                        <a href="#" onClick={() => deletePetById(pet.petId)}>Delete</a>
                      </td>
                      </tr>
                  ))}
                </tbody>
            

            </table>
        </div>
     </div>
    </>
  )
}

export default PetList