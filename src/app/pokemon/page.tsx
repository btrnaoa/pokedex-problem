import PokemonRow from './components/PokemonRow';

const bulbasaur = {
  id: 1,
  name: 'Bulbasaur',
  types: ['grass'],
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
};

export default function Pokemon() {
  return <PokemonRow name={bulbasaur.name} sprite={bulbasaur.sprite} />;
}
