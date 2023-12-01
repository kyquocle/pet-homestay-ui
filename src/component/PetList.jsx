// PetList.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../component/PetList.scss';
import { useState, useEffect } from 'react';
import PetService from '../service/PetService.js';

const PetList = () => {
  const [petData, setPetData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PetService.getAllPet();
        setPetData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const deletePetById = async (petId) => {
    try {
      await PetService.deletePetById(petId);
      setPetData(petData.filter((pet) => pet.petId !== petId));
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const updatePet = (petId) => {

    navigate(`/updatePet/${petId}`)
  }

  return (
    <>
      <h1>Pet management</h1>
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
              {petData.map((p) => (
                <tr key={p.petId}>
                  <td>{p.petId}</td>
                  <td>{p.petName}</td>
                  <td>{p.petAttribute}</td>
                  <td>{p.petRace}</td>
                  <td>
                    <a 
                    onClick={() => updatePet( p.petId)}
                    >Update</a>
                    <a href="#" onClick={() => deletePetById(p.petId)}>
                      Delete
                    </a>
                  </td>
                </tr>
              ))}

          
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PetList;
