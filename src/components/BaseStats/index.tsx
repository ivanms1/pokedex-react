import React from 'react';
import classNames from 'classnames';

import styles from './BaseStats.module.css';

interface BaseStatsProps {
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

const BaseStats = ({ baseStats }: BaseStatsProps) => {
  const total = Object.values(baseStats).reduce((a, b) => a + b);

  return (
    <div className={styles.BaseStats}>
      <span className={styles.Title}>Base Stats:</span>
      <div className={styles.Stats}>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>HP: </span>
            <span className={styles.StatNumber}>{baseStats.hp}</span>
          </div>
          <div
            style={{ width: baseStats.hp }}
            className={classNames(
              styles.StatBar,
              {
                [styles.red]: baseStats.hp <= 50
              },
              {
                [styles.yellow]: baseStats.hp > 50 && baseStats.hp < 100
              },
              {
                [styles.green]: baseStats.hp > 99
              }
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Attack: </span>
            <span className={styles.StatNumber}>{baseStats.attack}</span>
          </div>
          <div
            style={{ width: baseStats.attack }}
            className={classNames(
              styles.StatBar,
              {
                [styles.red]: baseStats.attack <= 50
              },
              {
                [styles.yellow]: baseStats.attack > 50 && baseStats.attack < 100
              },
              {
                [styles.green]: baseStats.attack > 99
              }
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Defense:</span>
            <span className={styles.StatNumber}>{baseStats.defense}</span>
          </div>
          <div
            style={{ width: baseStats.defense }}
            className={classNames(
              styles.StatBar,
              {
                [styles.red]: baseStats.defense <= 50
              },
              {
                [styles.yellow]:
                  baseStats.defense > 50 && baseStats.defense < 100
              },
              {
                [styles.green]: baseStats.defense > 99
              }
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Sp Atk: </span>
            <span className={styles.StatNumber}>{baseStats.specialAttack}</span>
          </div>
          <div
            style={{ width: baseStats.specialAttack }}
            className={classNames(
              styles.StatBar,
              {
                [styles.red]: baseStats.specialAttack <= 50
              },
              {
                [styles.yellow]:
                  baseStats.specialAttack > 50 && baseStats.specialAttack < 100
              },
              {
                [styles.green]: baseStats.specialAttack > 99
              }
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Sp Def: </span>
            <span className={styles.StatNumber}>
              {baseStats.specialDefense}
            </span>
          </div>
          <div
            style={{ width: baseStats.specialDefense }}
            className={classNames(
              styles.StatBar,
              {
                [styles.red]: baseStats.specialDefense <= 50
              },
              {
                [styles.yellow]:
                  baseStats.specialDefense > 50 &&
                  baseStats.specialDefense < 100
              },
              {
                [styles.green]: baseStats.specialDefense > 99
              }
            )}
          />
        </div>
        <div className={styles.Stat}>
          <div className={styles.StatInfo}>
            <span>Speed: </span>
            <span className={styles.StatNumber}>{baseStats.speed}</span>
          </div>
          <div
            style={{ width: baseStats.speed }}
            className={classNames(
              styles.StatBar,
              {
                [styles.red]: baseStats.speed <= 50
              },
              {
                [styles.yellow]: baseStats.speed > 50 && baseStats.speed < 100
              },
              {
                [styles.green]: baseStats.speed > 99
              }
            )}
          />
        </div>
        <div>
          <span>Total: {total}</span>
        </div>
      </div>
    </div>
  );
};

export default BaseStats;
