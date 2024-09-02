import axios from "axios";

class PokemonService{
    getAll = async() => {
        return (await axios.get("http://localhost:8080/api/pokemon/all")).data;
    }
}

export default new PokemonService();