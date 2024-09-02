import axios from "axios";

class PartyService {
    battle = async (pokemonPlayer, pokemonCpu) => {
        const response = await axios.post("http://localhost:8080/api/party/battle", {
            pokemonPlayer,
            pokemonCpu
        });
        return response.data;  
    }
}

export default new PartyService();