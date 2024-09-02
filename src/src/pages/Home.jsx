import { useEffect, useRef, useState } from 'react';
import { CardPokemon } from '../components/CardPokemon';
import { Alert, Box, Button, Stack } from '@mui/material';
import PokemonPreview from '../components/PokemonPreview';
import PokemonService from '../services/PokemonService';
import PartyService from '../services/PartyService';

const Home = () => {

    const [openResult, setOpenResult] = useState(false)
    const [battleResult, setBattleResult] = useState({
        message: "",
        type: "",
    });
    const [pokemons, setPokemons] = useState([]);
    const [pokemonPlayer, setPokemonPlayer] = useState({
        id: "pokemon-0",
        name: "???",
        attack: 0,
        defense: 0,
        hp: 0,
        speed: 0,
        type: "Type",
        imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
    });
    const [pokemonCpu, setPokemonCpu] = useState({
        id: "pokemon-0",
        name: "???",
        attack: 0,
        defense: 0,
        hp: 0,
        speed: 0,
        type: "Type",
        imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
    });

    const choosePokemon = (pokemonId) => {
        setOpenResult(false);
        const choosedPokemon = pokemons.find(({ id }) => pokemonId === id);
        setPokemonPlayer(choosedPokemon);
        const randomIndex = Math.floor(Math.random() * (pokemons.length - 1));
        const rivalPokemon = pokemons[randomIndex];
        setPokemonCpu(rivalPokemon);
    }

    const startBattle = async () => {
        const result = await PartyService.battle(pokemonPlayer, pokemonCpu)
        console.log(result)
        if (result === "WIN") {
            setBattleResult({ hasResult: true, type: "success", message: "wins" })
        }
        if (result === "DEFEAT") {
            setBattleResult({ hasResult: true, type: "error", message: "defeat" })
        }
    }

    useEffect(() => {
        PokemonService.getAll().then(res => setPokemons(res));
    }, [])

    useEffect(() => {
        if (battleResult.message) {
            setOpenResult(true);
        }
    }, [battleResult])


    return (
        <>
            <h1>Battle of Pokemon</h1>
            <h3>Select your pokemon</h3>

            <Stack flexDirection={'row'} flexWrap={'wrap'} justifyContent={"center"} gap={"1rem"} >
                {pokemons.map(pokemon =>
                    <PokemonPreview pokemon={pokemon} choosePokemon={() => choosePokemon(pokemon.id)} key={pokemon.id} />
                )}
            </Stack>
            <Stack flexDirection={'column'}   justifyContent={"center"} alignItems={"center"} padding={2} display={"flex"} >
            {openResult &&
                (<Alert icon={false} variant="outlined" severity={battleResult.type}>{pokemonPlayer.name + " " + battleResult.message}</Alert>)
            }
            </Stack>
            <Box mt={2}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className="card-player">
                        <CardPokemon pokemon={pokemonPlayer} />
                    </div>
                    <div >
                        <Button
                            onClick={() => startBattle()}
                            variant="contained"
                            sx={{
                                color: "white",
                                background: "#009141"
                            }}>
                            Start Battle
                        </Button>
                    </div>
                    <div>
                        <div className="card-cpu">
                            <CardPokemon pokemon={pokemonCpu} />
                        </div>
                    </div>
                </Stack>
            </Box>
        </>
    );
}

export default Home;