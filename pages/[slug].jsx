import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Abilities from "../components/entry/abilities";
import Capsule from "../components/entry/capsule";

import Types from "../components/entry/type/Types";

import Pagination from "../components/entry/pagination";

import InfoPage from "../components/entry/info-page";
import Sprite from "../components/entry/sprite";
import Moves from "../components/entry/moves";

const PokemonCard = styled.article`
  display: flex;

  overflow: auto;
  max-height: 600px;

  max-width: 1000px;

  background: rgb(45, 138, 123);
  .basis {
    flex-basis: 50%;
  }

  .image {
    padding-top: 0.5rem;
    position: sticky;
    top: 0;

    img {
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;

      background-color: pink;

      border-radius: 5px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .image {
      position: unset;
    }
  }
`;

export default function Entry({
  name,
  spriteUrl,
  abilities,
  types,
  moves = [],
}) {
  return (
    <Pagination
      image={<Sprite name={name} spriteUrl={spriteUrl} types={types} />}
    >
      {[
        <InfoPage key={"0"}>
          <Abilities abilities={abilities} />
        </InfoPage>,
        <InfoPage key={"1"} />,
        <InfoPage key={"2"}>
          <Moves moves={moves} />
        </InfoPage>,
      ]}
    </Pagination>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  const pokemon = await res.json();

  const paths = pokemon.results.map((p) => {
    return {
      params: {
        slug: p.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fs = require("fs");

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
  const pokemonData = await res.json();

  const spriteUrl = pokemonData.sprites.front_default;

  let abilities = [];

  for (let item of pokemonData.abilities) {
    const res = await fetch(item.ability.url);
    const description = await res.json();

    const desc =
      description.effect_entries.filter((e) => e.language.name === "en")[0]
        ?.short_effect ?? "Description missing";

    const is_hidden = pokemonData.abilities.filter((a) => {});

    const ability = {
      name: item.ability.name,
      description: desc,
      isHidden: item.is_hidden,
    };

    abilities.push(ability);
  }

  const types = pokemonData.types.map((t) => {
    return t.type.name;
  });

  const tempMoves = await Promise.all(
    pokemonData.moves.map(async (m) => {
      let relMoves = undefined;

      m.version_group_details.forEach((a) => {
        if (a.version_group.name === "emerald") {
          relMoves = a;
        }
      });

      if (!relMoves) return;

      const result = await fetch(m.move.url);
      const moveData = await result.json();

      return {
        name: m.move.name,
        learnedAtLevel: relMoves.level_learned_at,
        LearnMethod: relMoves.move_learn_method.name,
        accuracy: moveData.accuracy,
        power: moveData.power,
        dmgClass: moveData.damage_class.name,
        effectEntry: String(moveData.effect_entries[0].effect)
          // .replace(/\n/g, "")
          .replace("$effect_chance%", `${moveData.effect_chance}%`),
        typing: moveData.type.name,
      };
    })
  );

  const moves = tempMoves.filter((e) => e);

  return {
    props: {
      name: pokemonData.name,
      spriteUrl,
      abilities,
      types,
      moves,
    },
  };
}
