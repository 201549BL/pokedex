import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Abilities from "../components/entry/abilities";
import Capsule from "../components/entry/capsule";

import Pagination from "../components/entry/pagination";

import InfoPage from "../components/entry/info-page";
import Sprite from "../components/entry/sprite";
import Moves from "../components/entry/moves";

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
        <Abilities abilities={abilities} key="0" />,
        <Moves moves={moves} key="1" />,
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
        learnMethod: relMoves.move_learn_method.name,
        accuracy: moveData.accuracy,
        power: moveData.power,
        dmgClass: moveData.damage_class.name,
        effectEntry: String(moveData.effect_entries[0].short_effect).replace(
          "$effect_chance%",
          `${moveData.effect_chance}%`
        ),
        typing: moveData.type.name,
      };
    })
  );

  let moves = tempMoves
    .filter((e) => e)
    .sort((a, b) => a.learnedAtLevel - b.learnedAtLevel);

  const movesNotLearnedByLevel = moves.splice(
    0,
    moves.findIndex((m) => {
      // console.log(m);
      return m.learnedAtLevel > 0;
    })
  );

  moves = [...moves, ...movesNotLearnedByLevel];

  // console.log(
  //   "rest",
  //   moves.findIndex((m) => m.learnedAtLevel > 0)
  // );

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
