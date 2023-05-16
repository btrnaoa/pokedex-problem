'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

export default function PokemonTypeSelection(props: PokemonTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string>(
    props.selectedType || '',
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    props.selectType(selectedType);
    setSelectedType('');
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          value={selectedType}
          onChange={handleChange}
        />
        <button>Select</button>
      </form>
      <p>Selected Type: &quot;{props.selectedType}&quot;</p>
    </>
  );
}
