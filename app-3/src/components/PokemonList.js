import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonList = () => {
    const [ PokemonList, setPokemonList ] = useState([]);

    const getChars = async () => {
        try {
          const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5');
          setPokemonList(data.results);
        } catch(err) {
          console.log(err);
        }
      }

    useEffect(() => {
        getChars();
    }, [])

    return (
        PokemonList.map(pokemon => <li><Link to={`/pokemon/${pokemon.name}`}> {pokemon.name} </Link> </li>)
    )
}

export default PokemonList;