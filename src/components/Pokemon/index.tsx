import React from 'react';
import classNames from 'classnames';

import BaseStats from '../BaseStats';

import styles from './/Pokemon.module.css';

interface PokemonProps {
  pokemon: {
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
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  return (
    <div className={styles.Pokemon}>
      <img
        src={pokemon.sprite}
        className={styles.PokemonImage}
        alt={pokemon.name}
      />
      <div className={styles.InfoStatsContainer}>
        <div className='Info'>
          <div className={styles.TypesContainer}>
            <span>Types:</span>
            <div className={styles.Types}>
              {pokemon.types.map(type => (
                <span
                  key={type}
                  className={classNames(styles.Type, styles[type])}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.Abilities}>
            <span>Abilities:</span>
            <div>
              {pokemon.abilities.map(ability => (
                <span key={ability} className={styles.Ability}>
                  {ability.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.Abilities}>
            <span>Heigth:</span>
            <div>
              <span className={styles.Ability}>{pokemon.height} m</span>
            </div>
          </div>
          <div className={styles.Abilities}>
            <span>Weight:</span>
            <div>
              <span className={styles.Ability}>{pokemon.weight} kg</span>
            </div>
          </div>
        </div>
        <BaseStats baseStats={pokemon.baseStats} />
      </div>
    </div>
  );
};

export default Pokemon;
