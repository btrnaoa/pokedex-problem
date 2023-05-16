import Image from 'next/image';

type PokemonRowProps = {
  name: string;
  sprite: string;
};

export default function PokemonRow(props: PokemonRowProps) {
  return (
    <li>
      <Image src={props.sprite} width={96} height={96} alt={props.name} />
      <p>{props.name}</p>
    </li>
  );
}
