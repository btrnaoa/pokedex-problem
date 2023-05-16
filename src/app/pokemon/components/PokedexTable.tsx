import { Pokemon } from '../types';
import PokemonRow from './PokemonRow';

type PokedexTableProps = {
  pokemon: Pokemon[];
};

export default function PokedexTable(props: PokedexTableProps) {
  return (
    <ul>
      {props.pokemon.map(({ id, name, sprite }) => (
        <PokemonRow key={id} name={name} sprite={sprite} />
      ))}
    </ul>
  );
}
