import React, { useState } from 'react';
import Select from 'react-select';

import { pokemonOptions } from './assets/pokemons';

import './App.css';
import BaseStats from './components/BaseStats';
import Spinner from './components/Spinner';

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
          selectedPokemon && (
            <div className='Pokemon'>
              <img
                src={selectedPokemon.sprite}
                className='PokemonImage'
                alt={selectedPokemon.name}
              />
              <div className='InfoStatsContainer'>
                <div className='Info'>
                  <div className='TypesContainer'>
                    <span>Types:</span>
                    <div className='Types'>
                      {selectedPokemon.types.map(type => (
                        <span key={type} className={`Type ${type}`}>
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='Abilities'>
                    <span>Abilities:</span>
                    <div>
                      {selectedPokemon.abilities.map(ability => (
                        <span key={ability} className='Ability'>
                          {ability.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='Abilities'>
                    <span>Heigth:</span>
                    <div>
                      <span className='Ability'>
                        {selectedPokemon.height} m
                      </span>
                    </div>
                  </div>
                  <div className='Abilities'>
                    <span>Weight:</span>
                    <div>
                      <span className='Ability'>
                        {selectedPokemon.weight} kg
                      </span>
                    </div>
                  </div>
                </div>
                <BaseStats baseStats={selectedPokemon.baseStats} />
              </div>
            </div>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default App;
