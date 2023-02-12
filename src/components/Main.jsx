import React from "react"
import axios from "axios"
import { useState } from "react"
import PokeCard from "./Card"
import './Main.scss'

const Main = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [error, setError] = useState('')

    const getPokemon = () => {
        axios({
            method: 'get',
            url: `https://pokeapi.co/api/v2/pokemon/${search}`,
        })
        .then((response) => {
            console.log(response.data)
            search ? setResults([{...response.data}]) : setResults(response.data.results)
        })
    }

    const cards = () => {
         return results.map((result) => {
            return (
                <PokeCard 
                    name={result.name}
                    abilities={result.abilities}
                />
            )
        })
    }

    return (
        error 
            ?
                <h1>{error}</h1>
            :
                <div>
                    <button onClick={() => getPokemon()}>{search ? 'Get Pokemon' : 'Get All Pokemon'}</button>
                    <input placeholder="Search Individual Pokemon" onChange={e => setSearch(e.target.value)} value={search}/>
                    <div className="cards_container">
                        {cards()}
                    </div>
                </div>
                
            

    )
}

export default Main