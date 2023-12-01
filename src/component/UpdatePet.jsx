import { useNavigate, useParams } from "react-router";
import PetService from "../service/PetService";
import { useState, useEffect } from 'react';
import '../component/UpdatePet.scss';

const UpdatePet = () => {
  const navigate = useNavigate();
  const { petId } = useParams();
  const [pet, setPet] = useState({
    petId: petId,
    petName: "",
    petAttribute: "",
    petRace: ""
  });
  const [updateStatus, setUpdateStatus] = useState([]);

  useEffect(() => {
    const fetchPetById = async () => {
      try {
        const response = await PetService.getPetById(petId);
        setPet(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPetById();
  }, [petId]);

  const handleChange = (e) => {
    const value = e.target.value;
    setPet({ ...pet, [e.target.name]: value });
  };

  const updatePetById = (e) => {
    e.preventDefault();
    PetService.updatePetById(pet, petId)
      .then(() => {
        setUpdateStatus("Updated successfully!");
      })
      .catch(error => {
        console.log(error);
        setUpdateStatus("Update failed. Please try again.");
      });
  };

  return (
    <>
      <div className="container-update">
        <h1 className="h1-up">Update Pet</h1>
        <div>
          <label className="label">Pet Name</label>
          <input
            className="inp"
            type="text"
            value={pet.petName}
            name="petName"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="label">Pet Attribute</label>
          <input
            className="inp"
            type="text"
            value={pet.petAttribute}
            name="petAttribute"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="label">Pet Race</label>
          <input
            className="inp"
            type="text"
            value={pet.petRace}
            name="petRace"
            onChange={handleChange}
          />
        </div>

        <button className="button-up" onClick={updatePetById}>
          Update
        </button>
        <button className="button-de" onClick={() => navigate("/petList")}>
          Cancel
        </button>

        {updateStatus && (
          <p className="update-status">{updateStatus}</p>
        )}
      </div>
    </>
  );
};

export default UpdatePet;
