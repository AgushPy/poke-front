import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PokemonPreview = ({ pokemon, choosePokemon }) => {

    return (
        <div onClick={choosePokemon} style={{cursor: "pointer"}}>
        <Card sx={{ maxWidth: 200, maxHeight: 200, boxShadow: "-4px 4px 12px 0px rgba(174, 176, 202, 1)" }}>
            <figure>
                <CardMedia
                    component="img"
                    alt={pokemon.name}
                    image={pokemon.imageUrl}
                />
            </figure>
            <CardContent sx={{paddingTop : "0", paddingBottom: "0"}} >
                <Typography textAlign="start" variant="h6" component="h6">{pokemon.name}</Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default PokemonPreview;