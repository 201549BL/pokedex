import Head from "next/head";
import Scroller from "../components/look-up/scroll";
import Viewport from "../components/look-up/viewport";
import styled from "styled-components";
import useScrollPosition from "../hooks/useScrollPosition";
import Spinner from "../components/look-up/spinner";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";

const StyledLookup = styled.main`
  display: flex;

  height: 100vh;

  line-height: 2;

  overflow: hidden;

  .background {
    position: fixed;

    width: 100vw;
    height: 100vh;

    z-index: -1;

    background: repeating-linear-gradient(
      #2dbc4b,
      #2dbc4b 1rem,
      #0a7c1c 1rem,
      #0a7c1c 2rem
    );

    filter: blur(1px);
  }

  .viewport {
    flex-basis: 50%;

    height: 80vh;

    display: flex;

    position: relative;

    align-self: center;

    img {
      width: 100%;
    }
  }

  .scroller {
    flex-basis: 50%;

    height: 80vh;
    background: #ece836;

    align-self: center;

    overflow: auto;

    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;

    .scroll-area {
      scroll-snap-align: center;
    }
    .top-padding {
      height: 50%;
    }
    .bottom-padding {
      height: 50%;
    }
  }
`;

export default function Home({ pokemon }) {
  const [scroll, setScroll] = useState(0);
  const ref = useRef(0);

  const pokemonData = useMemo(
    () =>
      pokemon.results.map((p) => {
        return (
          <h2 key={p.name} className={`scroll-area`}>
            {p.name}
          </h2>
        );
      }),
    [pokemon.results]
  );

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

  const calcPxToDeg = (scrollTop, scrollHeight) => {
    // console.log("scrollTop", scrollTop);
    // console.log("scrollHeight", scrollHeight);

    return Math.floor((scrollTop / scrollHeight) * 100);
  };

  useEffect(() => {
    console.log(scroll);
  });

  const handleScroll = (e) => {
    setScroll(
      calcPxToDeg(
        e.target.scrollTop,
        e.target.scrollHeight - e.target.clientHeight
      )
    );
  };

  return (
    <StyledLookup>
      <div className="background" />
      <div className="viewport">
        <Spinner rotation={scroll * 10} />
        <Viewport scrollFactor={scroll}>{pokemonSprites}</Viewport>
      </div>
      <div className="scroller" onScroll={handleScroll} ref={ref}>
        <Scroller onScroll={handleScroll}>
          <div className="top-padding"></div>
          {pokemonData}
          <div className="bottom-padding"></div>
        </Scroller>
      </div>
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
