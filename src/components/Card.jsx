import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Card.scss'
import { List, ListItem } from "@mui/material";

const PokeCard = (props) => {

    const {name, abilities} = props

    const abilitiesList = () => {
        return abilities.map((ability) => {
            return (
                <ListItem>{ability.ability?.name}</ListItem>
            )
        })
    }
    return (

    <Card className="card" sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
            </Typography>
            <List>
                {abilities?.length ? abilitiesList() : ''}
            </List>
        </CardContent>
        </Card>
    )
}

export default PokeCard