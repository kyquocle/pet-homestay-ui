import axios from "axios"

const PET_API_URL = "http://localhost:8080/api/pet" 

class PetService {
    getAllPet() {
        return axios.get(PET_API_URL);
    }

    addPet(pet) {
        return axios.post(PET_API_URL, pet);
    }

    deletePetById(petId) {
        return axios.delete(PET_API_URL + "/" + petId);
    }

    getPetById(petId) {
        return axios.get(PET_API_URL + "/" + petId);
    }

    updatePetById(pet,petId){
        return axios.put(PET_API_URL + "/" + petId,pet);
    }
}

export default new PetService();