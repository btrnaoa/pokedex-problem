'use client';

import { useState } from 'react';
import { Pokemon } from '../types';
import PokedexTable from './PokedexTable';
import PokemonTypeSelection from './PokemonTypeSelection';

type FilterablePokedexTableProps = {
  pokemon: Pokemon[];
};

export default function FilterablePokedexTable(
  props: FilterablePokedexTableProps,
) {
  const [selectedType, setSelectedType] = useState<string | undefined>();

  const handleSelectType = (type: string | undefined) => {
    setSelectedType(type);
  };

  const pokemon =
    (selectedType &&
      props.pokemon.filter(({ types }) => types.includes(selectedType))) ||
    props.pokemon;

  return (
    <>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={handleSelectType}
      />
      <PokedexTable pokemon={pokemon} />
    </>
  );
}
