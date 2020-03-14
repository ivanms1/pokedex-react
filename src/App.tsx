import React, { useState } from 'react';
import Select from 'react-select';

import Spinner from './components/Spinner';
import Pokemon from './components/Pokemon';

import { pokemonOptions } from './assets/pokemons';

import './App.css';

type PokemonType = {
  sprite: string;
  name: string;
  types: string[];
  abilities: string[];
  height: string;
  weight: string;
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
};

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonType | null>(
    null
  );
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (pokemon: any) => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
      .then(res => res.json())
      .then(data => {
        setSelectedPokemon({
          name: data.name,
          sprite: data.sprites.front_default,
          types: data.types.map((type: any) => type.type.name),
          abilities: data.abilities.map((ability: any) => ability.ability.name),
          height: (data.height * 0.1).toFixed(1),
          weight: (data.weight * 0.1).toFixed(1),
          baseStats: {
            hp: data.stats[5].base_stat,
            attack: data.stats[4].base_stat,
            defense: data.stats[3].base_stat,
            specialAttack: data.stats[2].base_stat,
            specialDefense: data.stats[1].base_stat,
            speed: data.stats[0].base_stat
          }
        });
        setLoading(false);
      });
  };

  const handleInputChange = (query: string, { action }: { action: string }) => {
    if (query !== '' && action === 'input-change') {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  };

  return (
    <div className='App'>
      <h1 className='Title'>Pokedex</h1>
      <div className='Pokedex'>
        <Select
          className='Select'
          placeholder='Search Pokemon'
          onChange={handleChange}
          onInputChange={handleInputChange}
          options={pokemonOptions}
          menuIsOpen={menuIsOpen}
        />
        {!loading ? (
          selectedPokemon && <Pokemon pokemon={selectedPokemon} />
        ) : (
          <Spinner />
        )}
      </div>
      <p className='Credit'>
        Made by{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.ivansaldano.com/'
        >
          Ivan
        </a>
      </p>
    </div>
  );
}

export default App;
