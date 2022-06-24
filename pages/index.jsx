import Head from "next/head";
import Scroller from "../components/look-up/scroll";
import Viewport from "../components/look-up/viewport";
import styled from "styled-components";

import Spinner from "../components/look-up/spinner";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";
import useScrollSync from "../hooks/useScrollSync";

const StyledLookup = styled.main`
  height: 100vh;
  line-height: 2;

  display: flex;
  justify-content: right;

  padding: 0 1rem;

  .background {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: -1;

    overflow: hidden;

    background: repeating-linear-gradient(
      #2dbc4b,
      #2dbc4b 1rem,
      #0a7c1c 1rem,
      #0a7c1c 2rem
    );

    filter: blur(1px);
  }
`;

export default function Home({ pokemon }) {
  const [scroll, setScroll] = useState(0);
  const scrollerRef = useRef(undefined);
  const spriteRef = useRef(undefined);

  const { registerPane, unregisterPane, onScrollHandler } = useScrollSync();

  const refs = useMemo(
    () => [scrollerRef, spriteRef],
    [scrollerRef, spriteRef]
  );

  useEffect(() => {
    refs.forEach((ref) => registerPane(ref));

    return () => {
      refs.forEach((ref) => unregisterPane(ref));
    };
  }, []);

  const pokemonSprites = useMemo(
    () =>
      pokemon.results.map((p) => {
        return (
          <img
            key={p.name}
            src={`sprites/${p.name}.png`}
            alt={p.name}
            style={{ scrollSnapAlign: "center" }}
          />
        );
      }),
    []
  );

  const calcFactor = (scrollTop, scrollHeight) => {
    const floor = Math.floor((scrollTop / scrollHeight) * 100);

    return floor;
  };

  const handleScroll = (e) => {
    onScrollHandler(e);

    setScroll(
      calcFactor(
        e.target.scrollTop,
        e.target.scrollHeight - e.target.clientHeight
      )
    );
  };

  return (
    <StyledLookup>
      <div className="background" />
      <Spinner rotation={scroll * 10} />

      <Viewport ref={spriteRef}>{pokemonSprites}</Viewport>

      <Scroller
        ref={scrollerRef}
        onScroll={handleScroll}
        pokemonData={pokemon.results}
      ></Scroller>
    </StyledLookup>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}
