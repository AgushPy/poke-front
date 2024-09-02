import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import BorderLinearProgress from "./BorderLinearProgress";

export const CardPokemon = ({ pokemon }) => {

    const isASelectedPokemon = pokemon.id != "pokemon-0";

    return (
        <Card sx={{ maxWidth: 345, boxShadow: "-8px 8px 12px 0px rgba(174, 176, 202, 1)" }}>
            <CardMedia
                sx={{
                    filter: isASelectedPokemon ? "" : "brightness(0)"
                }}
                component="img"
                alt={pokemon.name}
                image={pokemon.imageUrl}
            />
            <CardContent >
                <Typography textAlign="start" variant="h5" component="div">{pokemon.name}</Typography>
                <hr />
                
                <Typography textAlign="start" fontSize={"0.75rem"}>HP</Typography>
                {/* values in percent */}
                <BorderLinearProgress  sx={{marginBottom: "0.75rem"}} variant="determinate" value={pokemon.hp * 10} />

                <Typography textAlign="start" fontSize={"0.75rem"}>Attack</Typography>
                <BorderLinearProgress  sx={{marginBottom: "0.75rem"}} variant="determinate" value={pokemon.attack * 10} />
                
                <Typography textAlign="start" fontSize={"0.75rem"}>Defense</Typography>
                <BorderLinearProgress  sx={{marginBottom: "0.75rem"}} variant="determinate" value={pokemon.defense * 10} />
                
                <Typography textAlign="start" fontSize={"0.75rem"}>Speed</Typography>
                <BorderLinearProgress  sx={{marginBottom: "0.75rem"}} variant="determinate" value={pokemon.speed * 10} />
            </CardContent>

        </Card>
    )

}